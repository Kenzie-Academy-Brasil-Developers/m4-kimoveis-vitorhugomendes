import { z } from 'zod';
import {
  scheduleSchema,
  scheduleSchemaRequest,
} from '../schemas/schedules.schemas';

type TSchedule = z.infer<typeof scheduleSchema>;

type TScheduleRequest = z.infer<typeof scheduleSchemaRequest>;

export { TSchedule, TScheduleRequest };
