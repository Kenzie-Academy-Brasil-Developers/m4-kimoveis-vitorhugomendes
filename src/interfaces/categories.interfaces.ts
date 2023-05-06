import { z } from 'zod';
import {
  categorySchema,
  categorySchemaRequest,
} from '../schemas/categories.schemas';

type TCategory = z.infer<typeof categorySchema>;

type TCategoryRequest = z.infer<typeof categorySchemaRequest>;

export { TCategory, TCategoryRequest };
