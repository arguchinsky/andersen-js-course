import { Router } from 'express';
import { createItem, removeItem } from '../utils';

const router = Router();

router
  .route('')
  .get((req, res) => res.send(req.context.models.shows))
  .post((req, res) => {
    const show = createItem(req.body);
    req.context.models.shows.push(show);
    res.send(req.context.models.shows);
  });

router
  .route('/:id')
  .get((req, res) => {
    const show = req.context.models.shows.find((item) => item.id === req.params.id);
    res.send(show);
  })
  .delete((req, res) => {
    req.context.models.shows = [...removeItem(req.context.models.shows, req.params.id)];
    res.send(req.context.models.shows);
  });

module.exports = router;
