import mongoose from 'mongoose';
import { DB_USER, DB_URL, PASSWORD } from '../config';

export const connectDb = () =>
  mongoose.connect(DB_URL, {
    user: DB_USER,
    pass: PASSWORD,
    reconnectTries: Number.MAX_VALUE,
    reconnectInterval: 500,
    keepAlive: true,
    keepAliveInitialDelay: 300000,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
