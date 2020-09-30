/* eslint-disable no-console */
import cors from 'cors';
import express from 'express';
import bodyParser from 'body-parser';
import { PORT } from './config';
import { getTime } from './utils';
import moviesRoutes from './routes/moviesRoutes';
import showsRoutes from './routes/showsRoutes';
import { models } from './model';
import { dbConnect } from './database';

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

dbConnect().then(async () =>
  app.listen(PORT, () => console.log(`[${getTime()}] The database is connected.`))
);
