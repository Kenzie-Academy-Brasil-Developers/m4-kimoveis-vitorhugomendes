import { z } from 'zod';
import { realEstateByCategorySchemaResponse } from '../schemas/realEstate.schemas';

const categorySchema = z.object({
  id: z.number(),
  name: z.string().max(45),
});

const categorySchemaRequest = categorySchema.omit({ id: true });

const allCategoriesSchemaResponse = z.array(categorySchema);

const listRealEstateByCategorySchemaResponse = categorySchema.extend({
  realEstate: realEstateByCategorySchemaResponse.array(),
});

export {
  categorySchema,
  categorySchemaRequest,
  allCategoriesSchemaResponse,
  listRealEstateByCategorySchemaResponse,
};
