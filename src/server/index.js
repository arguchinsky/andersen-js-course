import cors from 'cors';
import express from 'express';
import bodyParser from 'body-parser';
import { PORT } from './config';
import { models } from './model/model';
import moviesRoutes from './routes/moviesRoutes';
import showsRoutes from './routes/showsRoutes';

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use((req, res, next) => {
  req.context = {
    models,
  };
  next();
});

app.use('/movies', moviesRoutes);
app.use('/shows', showsRoutes);

// app.get('/movies/:id', (req, res) => {
//   const movie = req.context.models.movies.find((item) => item.id === req.params.id);
//   res.send(movie);
// });

// app.get('/shows/:id', (req, res) => {
//   const show = req.context.models.shows.find((item) => item.id === req.params.id);
//   res.send(show);
// });

// app.get('/movies', (req, res) => res.send(req.context.models.movies));

// app.get('/shows', (req, res) => res.send(req.context.models.shows));
// app.post('/movies', (req, res) => {
//   const { id, title, url } = req.body;

//   const movie = {
//     id,
//     title,
//     url,
//   };

//   console.log(models.movies);
//   models.movies.push(movie);

//   res.send('New movie was posted successful');
// });

// app.put('/movies/:id', (req, res) =>
//   res.send(`Method PUT has called for  movie id= ${req.params.id}`)
// );

// app.delete('/movies/:id', (req, res) => {
//   const { id, title } = req.context.models.movies.find((item) => item.id === req.params.id);
//   req.context.models.movies = [...req.context.models.movies.filter((item) => item.id !== id)];
//   res.send(`${title} was removed successful.`);
// });

app.listen(PORT, () => console.log(`Port ${PORT} is being tapped.`));
