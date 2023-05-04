import { z } from 'zod';

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string(),
  token: z.string(),
});

const requestLoginSchema = loginSchema.omit({ token: true });

const responseLoginSchema = loginSchema.omit({ email: true, password: true });

export { loginSchema, requestLoginSchema, responseLoginSchema };
