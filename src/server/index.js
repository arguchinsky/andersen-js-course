/* eslint-disable no-console */
import cors from 'cors';
import express from 'express';
import bodyParser from 'body-parser';
import { PORT } from './config';
import { models } from './model';
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

// connectDb().then(async () =>
//   app.listen(PORT, () => console.log(`Port ${PORT} is being tapped with DB connection.`))
// );

app.listen(PORT, () => console.log(`Port ${PORT} is being tapped.`));
