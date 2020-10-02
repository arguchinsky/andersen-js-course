/* eslint-disable no-console */
import cors from 'cors';
import express from 'express';
import { PORT } from './config';
import { getTime } from './utils';
import moviesRouters from './routers/moviesRouters';
import showsRouters from './routers/showsRouters';
import { models } from './model/models';
import { dbConnect } from './database/dbConnect';

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
  req.context = {
    models,
  };
  next();
});

app.use('/movies', moviesRouters);
app.use('/shows', showsRouters);

dbConnect().then(async () =>
  app.listen(PORT, () => console.log(`[${getTime()}] The database is connected.`))
);
