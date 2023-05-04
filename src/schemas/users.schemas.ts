import { z } from 'zod';

const userSchema = z.object({
  id: z.number(),
  name: z.string().max(45),
  email: z.string().email().max(45),
  admin: z.boolean().default(false),
  password: z.string().max(120),
  createdAt: z.date(),
  updatedAt: z.date(),
  deletedAt: z.date().nullish(),
});

const userSchemaRequest = userSchema.omit({
  id: true,
  createdAt: true,
  updatedAt: true,
  deletedAt: true,
});

const userSchemaResponse = userSchema.omit({ password: true });

const allUsersSchemaResponse = z.array(userSchemaResponse);

export {
  userSchema,
  userSchemaRequest,
  userSchemaResponse,
  allUsersSchemaResponse,
};
