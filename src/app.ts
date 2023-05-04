import 'reflect-metadata';
import 'express-async-errors';
import express, { Application } from 'express';
import { handleErrors } from './error';
import userRouters from './routes/users.routes';

const app: Application = express();
app.use(express.json());

app.use('/users', userRouters);

app.use(handleErrors);

export default app;
