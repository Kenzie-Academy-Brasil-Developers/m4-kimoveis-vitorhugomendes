import { z } from 'zod';
import {
  categorySchema,
  categorySchemaRequest,
  listRealEstateByCategorySchemaResponse,
} from '../schemas/categories.schemas';

type TCategory = z.infer<typeof categorySchema>;

type TCategoryRequest = z.infer<typeof categorySchemaRequest>;

type TRealEstateByCategoryResponse = z.infer<
  typeof listRealEstateByCategorySchemaResponse
>;

export { TCategory, TCategoryRequest, TRealEstateByCategoryResponse };
