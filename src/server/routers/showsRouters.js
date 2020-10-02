import { Router } from 'express';

const router = Router();

router
  .route('')
  .get(async (req, res) => {
    try {
      res.send(await req.context.models.Shows.find());
    } catch ({ message }) {
      res.send(message);
    }
  })
  .post(async (req, res) => {
    try {
      const movie = new req.context.models.Shows(req.body);
      await movie.save();
      res.send(await req.context.models.Shows.find());
    } catch ({ message }) {
      res.send(message);
    }
  });

router
  .route('/:id')
  .get(async (req, res) => {
    try {
      res.send(await req.context.models.Shows.findById(req.params.id));
    } catch ({ message }) {
      res.send(message);
    }
  })
  .patch(async (req, res) => {
    try {
      res.send(
        await req.context.models.Shows.findByIdAndUpdate(req.params.id, req.body, {
          new: true,
        })
      );
    } catch ({ message }) {
      res.send(message);
    }
  })
  .delete(async (req, res) => {
    try {
      await req.context.models.Shows.findByIdAndRemove(req.params.id);
      res.send(await req.context.models.Shows.find());
    } catch ({ message }) {
      res.send(message);
    }
  });

module.exports = router;
