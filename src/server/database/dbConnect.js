import mongoose from 'mongoose';
import { DB_USER, DB_URL, PASSWORD } from '../config';

export const dbConnect = () =>
  mongoose.connect(DB_URL, {
    user: DB_USER,
    pass: PASSWORD,
    keepAlive: true,
    keepAliveInitialDelay: 300000,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  });
