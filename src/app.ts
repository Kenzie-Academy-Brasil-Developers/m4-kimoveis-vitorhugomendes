import 'reflect-metadata';
import 'express-async-errors';
import express, { Application } from 'express';
import { handleErrors } from './error';
import userRoutes from './routes/users.routes';
import loginRoutes from './routes/login.routes';
import categoriesRoutes from './routes/categories.routes';

const app: Application = express();
app.use(express.json());

app.use('/users', userRoutes);
app.use('/login', loginRoutes);
app.use('/categories', categoriesRoutes);

app.use(handleErrors);

export default app;
