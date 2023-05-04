import { z } from 'zod';
import {
  loginSchema,
  requestLoginSchema,
  responseLoginSchema,
} from '../schemas/login.schemas';

type TLogin = z.infer<typeof loginSchema>;

type TLoginRequest = z.infer<typeof requestLoginSchema>;

type TLoginResponse = z.infer<typeof responseLoginSchema>;

export { TLogin, TLoginRequest, TLoginResponse };
