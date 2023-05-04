import { z } from 'zod';
import {
  userSchema,
  userSchemaRequest,
  userSchemaResponse,
  userUpdateSchema,
  userUpdateSchemaRequest,
} from '../schemas/users.schemas';

type TUser = z.infer<typeof userSchema>;

type TUserRequest = z.infer<typeof userSchemaRequest>;

type TUserResponse = z.infer<typeof userSchemaResponse>;

type TUserUpdate = z.infer<typeof userUpdateSchema>;

type TUserUpdateRequest = z.infer<typeof userUpdateSchemaRequest>;

export { TUser, TUserRequest, TUserResponse, TUserUpdate, TUserUpdateRequest };
