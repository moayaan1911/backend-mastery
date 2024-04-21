/** @format */

import express, { urlencoded } from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import { DATA_LIMIT } from './utils/constants.js';
import { userRouter } from './routes/user.route.js';
const app = express();

app.use(
  cors({
    origin: '*',
    credentials: true,
  })
);

app.use(
  express.json({
    limit: DATA_LIMIT,
  })
);
app.use(urlencoded({ extended: true, limit: DATA_LIMIT }));
app.use(express.static('public'));
app.use(cookieParser());

app.use('/api/v1/users', userRouter);
export { app };
