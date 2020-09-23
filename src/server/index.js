import cors from 'cors';
import express from 'express';
import bodyParser from 'body-parser';
import { PORT } from './config';

const movies = [
  {
    id: 'friends',
    title: 'Friends',
    url: 'http://seasonvar.ru/serial-394-Druz_ya-01-sezon.html',
  },
  {
    id: 'scrubs',
    title: 'Scrubs',
    url: 'http://seasonvar.ru/serial-247-Klinika-1-season.html',
  },
  {
    id: 'the-mentalist',
    title: 'The Mentalist',
    url: 'http://seasonvar.ru/serial-106-Mentalist.html',
  },
];

console.log(movies.find((movie) => movie.id === 1));
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use((req, res, next) => {
  [, req.movie] = movies;
  next();
});

app.get('/movies', (req, res) => res.send(movies));

app.post('/movies', (req, res) => {
  const { id, title, url } = req.body;

  const movie = {
    id,
    title,
    url,
  };

  movies.push(movie);

  res.send('New movie was posted successful');
});

app.put('/movies/:movieId', (req, res) =>
  res.send(`Method PUT has called for  movie id= ${req.params.movieId}`)
);

app.delete('/movies/:id', (req, res) => {
  const movie = movies.find((item) => item.id === req.params.id);
  res.send(`Method DELETE has called for tv-shows id= ${movie}`);
});

app.listen(PORT, () => console.log(`Port ${PORT} is being tapped.`));
