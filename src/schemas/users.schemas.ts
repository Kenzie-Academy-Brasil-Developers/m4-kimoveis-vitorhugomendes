import { z } from 'zod';

const userSchema = z.object({
  id: z.number(),
  name: z.string().max(45),
  email: z.string().email().max(45),
  admin: z.boolean().default(false),
  password: z.string().max(120),
  createdAt: z.date().or(z.string()),
  updatedAt: z.date().or(z.string()),
  deletedAt: z.string().nullish(),
});

const userSchemaRequest = userSchema.omit({
  id: true,
  createdAt: true,
  updatedAt: true,
  deletedAt: true,
});

const userSchemaResponse = userSchema.omit({ password: true });

const allUsersSchemaResponse = z.array(userSchemaResponse);

const userUpdateSchema = userSchemaRequest.omit({ admin: true });

const userUpdateSchemaRequest = userUpdateSchema.partial();

export {
  userSchema,
  userSchemaRequest,
  userSchemaResponse,
  allUsersSchemaResponse,
  userUpdateSchema,
  userUpdateSchemaRequest,
};
