import { Router } from 'express';
import ensureBodyIsValidMiddleware from '../middlewares/ensureBodyIsValid.middleware';
import { requestLoginSchema } from '../schemas/login.schemas';
import loginController from '../controllers/login.controllers';

const loginRoutes: Router = Router();

loginRoutes.post(
  '',
  ensureBodyIsValidMiddleware(requestLoginSchema),
  loginController
);

export default loginRoutes;
