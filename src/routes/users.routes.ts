import { Router } from 'express';
import ensureBodyIsValidMiddleware from '../middlewares/ensureBodyIsValid.middleware';
import { userSchemaRequest } from '../schemas/users.schemas';
import {
  createUserController,
  listUsersController,
} from '../controllers/users.controllers';
import ensureEmailIsUniqueMiddleware from '../middlewares/ensureEmailIsUnique.middleware';

const userRouters: Router = Router();

userRouters.post(
  '',
  ensureBodyIsValidMiddleware(userSchemaRequest),
  ensureEmailIsUniqueMiddleware,
  createUserController
);
userRouters.get('', listUsersController);

export default userRouters;
