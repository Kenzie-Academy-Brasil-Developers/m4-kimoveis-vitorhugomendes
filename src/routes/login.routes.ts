import { Router } from 'express';
import { loginSchemaRequest } from '../schemas/login.schemas';
import { ensureBodyIsValidMiddleware } from '../middlewares/index.middleware';
import loginController from '../controllers/login.controllers';

const loginRoutes: Router = Router();

loginRoutes.post(
  '',
  ensureBodyIsValidMiddleware(loginSchemaRequest),
  loginController
);

export default loginRoutes;
