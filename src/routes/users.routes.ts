import { Router } from 'express';
import {
  userSchemaRequest,
  userUpdateSchemaRequest,
} from '../schemas/users.schemas';
import {
  ensureBodyIsValidMiddleware,
  ensureUserEmailIsUniqueMiddleware,
  ensureTokenIsAdminMiddleware,
  ensureTokenIsValidMiddleware,
  ensureUserPermissionMiddleware,
  ensureIdIsValidMiddleware,
} from '../middlewares/index.middleware';
import {
  createUserController,
  deleteUserByIdController,
  editUserByIdController,
  listUsersController,
} from '../controllers/users.controllers';

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
