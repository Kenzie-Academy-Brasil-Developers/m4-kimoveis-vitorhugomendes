import { Router } from 'express';
import ensureBodyIsValidMiddleware from '../middlewares/ensureBodyIsValid.middleware';
import {
  userSchemaRequest,
  userUpdateSchemaRequest,
} from '../schemas/users.schemas';
import {
  createUserController,
  deleteUserByIdController,
  editUserByIdController,
  listUsersController,
} from '../controllers/users.controllers';
import ensureUserEmailIsUniqueMiddleware from '../middlewares/ensureUserEmailIsUnique.middleware';
import ensureTokenIsAdminMiddleware from '../middlewares/ensureTokenIsAdmin.middleware';
import ensureTokenIsValidMiddleware from '../middlewares/ensureTokenIsValid.middleware';
import ensureUserPermissionMiddleware from '../middlewares/ensureUserPermission.middleware';
import ensureIdIsValidMiddleware from '../middlewares/ensureIdIsValid.middleware';

const userRoutes: Router = Router();

userRoutes.post(
  '',
  ensureBodyIsValidMiddleware(userSchemaRequest),
  ensureUserEmailIsUniqueMiddleware,
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
  ensureUserEmailIsUniqueMiddleware,
  editUserByIdController
);

userRoutes.delete(
  '/:id',
  ensureIdIsValidMiddleware,
  ensureTokenIsValidMiddleware,
  ensureTokenIsAdminMiddleware,
  deleteUserByIdController
);

export default userRoutes;
