import { Router } from 'express';
import ensureBodyIsValidMiddleware from '../middlewares/ensureBodyIsValid.middleware';
import { scheduleSchemaRequest } from '../schemas/schedules.schemas';
import { createScheduleController } from '../controllers/schedules.controllers';
import ensureTokenIsValidMiddleware from '../middlewares/ensureTokenIsValid.middleware';

const schedulesRoutes: Router = Router();

schedulesRoutes.post(
  '',
  ensureBodyIsValidMiddleware(scheduleSchemaRequest),
  ensureTokenIsValidMiddleware,
  createScheduleController
);

export default schedulesRoutes;
