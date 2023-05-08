import { Router } from 'express';
import ensureBodyIsValidMiddleware from '../middlewares/ensureBodyIsValid.middleware';
import { loginSchemaRequest } from '../schemas/login.schemas';
import loginController from '../controllers/login.controllers';

const loginRoutes: Router = Router();

loginRoutes.post(
  '',
  ensureBodyIsValidMiddleware(loginSchemaRequest),
  loginController
);

export default loginRoutes;
