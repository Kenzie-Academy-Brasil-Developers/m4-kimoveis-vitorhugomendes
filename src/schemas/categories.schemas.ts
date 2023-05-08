import { z } from 'zod';

const categorySchema = z.object({
  id: z.number(),
  name: z.string().max(45),
});

const categorySchemaRequest = categorySchema.omit({ id: true });

const allCategoriesSchemaResponse = z.array(categorySchema);

const listRealEstateByCategorySchemaResponse = categorySchema.extend({
  realEstate: z
    .object({
      id: z.number(),
      value: z.number().or(z.string()),
      size: z.number().positive(),

      sold: z.boolean().default(false),
      createdAt: z.date().or(z.string()),
      updatedAt: z.date().or(z.string()),
    })
    .array(),
});

export {
  categorySchema,
  categorySchemaRequest,
  allCategoriesSchemaResponse,
  listRealEstateByCategorySchemaResponse,
};
