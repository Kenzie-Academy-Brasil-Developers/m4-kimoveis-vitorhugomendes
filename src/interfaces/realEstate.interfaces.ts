import { z } from 'zod';
import {
  realEstateByCategorySchemaResponse,
  realEstateSchema,
  realEstateSchemaRequest,
} from '../schemas/realEstate.schemas';

type TRealEstate = z.infer<typeof realEstateSchema>;

type TRealEstateRequest = z.infer<typeof realEstateSchemaRequest>;

type TRealEstateByCategoryResponse = z.infer<
  typeof realEstateByCategorySchemaResponse
>;

export { TRealEstate, TRealEstateRequest, TRealEstateByCategoryResponse };
