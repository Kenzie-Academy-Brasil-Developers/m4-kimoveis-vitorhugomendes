import { z } from 'zod';

const realStateSchema = z.object({
  id: z.number(),
  value: z.number().or(z.string()),
  size: z.number().int(),
  address: z.object({
    street: z.string().max(45),
    zipCode: z.string().max(8),
    number: z.string().max(7).optional(),
    city: z.string().max(20),
    state: z.string().max(2),
  }),
  categoryId: z.number(),
  sold: z.boolean(),
  createdAt: z.date().or(z.string()),
  updatedAt: z.date().or(z.string()),
});
