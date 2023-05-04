import { Router } from 'express';
import ensureBodyIsValidMiddleware from '../middlewares/ensureBodyIsValid.middleware';
import {
  userSchemaRequest,
  userUpdateSchemaRequest,
} from '../schemas/users.schemas';
import {
  createUserController,
  editUserByIdController,
  listUsersController,
} from '../controllers/users.controllers';
import ensureEmailIsUniqueMiddleware from '../middlewares/ensureEmailIsUnique.middleware';
import ensureTokenIsAdminMiddleware from '../middlewares/ensureTokenIsAdmin.middleware';
import ensureTokenIsValidMiddleware from '../middlewares/ensureTokenIsValid.middleware';
import ensureUserPermissionMiddleware from '../middlewares/ensureUserPermission.middleware';
import ensureIdIsValidMiddleware from '../middlewares/ensureIdIsValid.middleware';

const userRoutes: Router = Router();

userRoutes.post(
  '',
  ensureBodyIsValidMiddleware(userSchemaRequest),
  ensureEmailIsUniqueMiddleware,
  createUserController
);
userRoutes.get(
  '',
  ensureTokenIsValidMiddleware,
  ensureTokenIsAdminMiddleware,
  listUsersController
);
userRoutes.patch(
  '/:id',
  ensureBodyIsValidMiddleware(userUpdateSchemaRequest),
  ensureIdIsValidMiddleware,
  ensureTokenIsValidMiddleware,
  ensureUserPermissionMiddleware,
  ensureEmailIsUniqueMiddleware,
  editUserByIdController
);

export default userRoutes;
