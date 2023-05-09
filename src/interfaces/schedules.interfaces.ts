import { z } from 'zod';
import {
  scheduleSchema,
  scheduleSchemaRequest,
} from '../schemas/schedules.schemas';
import { Address, Category, Schedule } from '../entities';

type TSchedule = z.infer<typeof scheduleSchema>;

type TScheduleRequest = z.infer<typeof scheduleSchemaRequest>;

type TCreateScheduleResponse = {
  message: string;
};

type TListAllSchedulesResponse = {
  schedules: Schedule[];
  id?: number;
  sold?: boolean;
  value?: string | number;
  size?: number;
  createdAt?: string;
  updatedAt?: string;
  address?: Address;
  category?: Category;
};

export {
  TSchedule,
  TScheduleRequest,
  TCreateScheduleResponse,
  TListAllSchedulesResponse,
};
