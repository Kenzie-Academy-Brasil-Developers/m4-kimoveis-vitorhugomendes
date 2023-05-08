import { z } from 'zod';

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string(),
  token: z.string(),
});

const loginSchemaRequest = loginSchema.omit({ token: true });

const loginSchemaResponse = loginSchema.omit({ email: true, password: true });

export { loginSchema, loginSchemaRequest, loginSchemaResponse };
