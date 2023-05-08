import { z } from 'zod';
import { addressSchema, addressSchemaRequest } from './address.schema';
import { categorySchema } from './categories.schemas';

const realEstateSchema = z.object({
  id: z.number(),
  value: z.number().or(z.string()),
  size: z.number().positive(),
  address: addressSchema,
  category: categorySchema,
  sold: z.boolean(),
  createdAt: z.date().or(z.string()),
  updatedAt: z.date().or(z.string()),
});

const realEstateSchemaRequest = z.object({
  value: z.number().or(z.string()),
  size: z.number().positive(),
  address: addressSchemaRequest,
  categoryId: z.number(),
});

const realEstateByCategorySchemaResponse = realEstateSchema.omit({
  address: true,
  category: true,
});

const allRealEstatesByCategorySchemaResponse = z.array(
  realEstateByCategorySchemaResponse
);

export {
  realEstateSchema,
  realEstateSchemaRequest,
  allRealEstatesByCategorySchemaResponse,
  realEstateByCategorySchemaResponse,
};
