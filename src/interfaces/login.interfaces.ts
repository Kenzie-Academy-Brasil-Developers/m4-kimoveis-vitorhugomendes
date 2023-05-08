import { z } from 'zod';
import {
  loginSchema,
  loginSchemaRequest,
  loginSchemaResponse,
} from '../schemas/login.schemas';

type TLogin = z.infer<typeof loginSchema>;

type TLoginRequest = z.infer<typeof loginSchemaRequest>;

type TLoginResponse = z.infer<typeof loginSchemaResponse>;

export { TLogin, TLoginRequest, TLoginResponse };
