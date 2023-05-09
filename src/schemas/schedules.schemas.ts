import { z } from 'zod';

const scheduleSchema = z.object({
  id: z.number(),
  date: z.date().or(z.string()),
  hour: z.date().or(z.string()),
  realEstateId: z.number().int(),
  userId: z.number().int(),
});

const scheduleSchemaRequest = scheduleSchema.omit({ id: true, userId: true });

export { scheduleSchema, scheduleSchemaRequest };
