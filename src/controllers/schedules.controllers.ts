import { Request, Response } from 'express';
import createScheduleService from '../services/schedules/createSchedule.service';
import listSchedulesByRealEstateIdService from '../services/schedules/listSchedulesByRealEstateId.service';

const createScheduleController = async (
  request: Request,
  response: Response
): Promise<Response> => {
  const scheduleData = request.body;
  const userId = response.locals.id;

  const newSchedule = await createScheduleService(scheduleData, userId);

  return response.status(201).json(newSchedule);
};

const listSchedulesByRealEstateIdController = async (
  request: Request,
  response: Response
): Promise<Response> => {
  const schedulesList = await listSchedulesByRealEstateIdService();

  return response.json(schedulesList).send();
};

export { createScheduleController, listSchedulesByRealEstateIdController };
