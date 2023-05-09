import { Request, Response } from 'express';
import createScheduleService from '../services/schedules/createSchedule.service';

const createScheduleController = async (
  request: Request,
  response: Response
): Promise<Response> => {
  const scheduleData = request.body;
  const userId = response.locals.id;

  const newSchedule = await createScheduleService(scheduleData, userId);

  return response.status(201).json(newSchedule);
};

export { createScheduleController };
