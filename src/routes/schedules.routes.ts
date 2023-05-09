import { Router } from 'express';
import { scheduleSchemaRequest } from '../schemas/schedules.schemas';
import {
  ensureBodyIsValidMiddleware,
  ensureTokenIsValidMiddleware,
  ensureTokenIsAdminMiddleware,
  ensureIdIsValidMiddleware,
} from '../middlewares/index.middleware';
import {
  createScheduleController,
  listSchedulesByRealEstateIdController,
} from '../controllers/schedules.controllers';

const schedulesRoutes: Router = Router();

schedulesRoutes.post(
  '',
  ensureTokenIsValidMiddleware,
  ensureBodyIsValidMiddleware(scheduleSchemaRequest),
  createScheduleController
);

schedulesRoutes.get(
  '/realEstate/:id',
  ensureIdIsValidMiddleware,
  ensureTokenIsValidMiddleware,
  ensureTokenIsAdminMiddleware,
  listSchedulesByRealEstateIdController
);

export default schedulesRoutes;
