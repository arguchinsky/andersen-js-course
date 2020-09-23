import { Router } from 'express';
import { createItem, removeItem } from '../utils';

const router = Router();

router
  .route('')
  .get((req, res) => res.send(req.context.models.movies))
  .post((req, res) => {
    const movie = createItem(req.body);
    req.context.models.movies.push(movie);
    res.send(req.context.models.movies);
  });

router
  .route('/:id')
  .get((req, res) => {
    const movie = req.context.models.movies.find((item) => item.id === req.params.id);
    res.send(movie);
  })
  .delete((req, res) => {
    req.context.models.movies = [...removeItem(req.context.models.movies, req.params.id)];
    res.send(req.context.models.movies);
  });

module.exports = router;
