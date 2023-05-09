import { z } from 'zod';

const scheduleSchema = z.object({
  id: z.number(),
  date: z.string(),
  hour: z.string(),
  realEstateId: z.number().int(),
  userId: z.number().int(),
});

const scheduleSchemaRequest = scheduleSchema
  .omit({ id: true, userId: true })
  .required();

export { scheduleSchema, scheduleSchemaRequest };
