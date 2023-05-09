import { Router } from 'express';
import { realEstateSchemaRequest } from '../schemas/realEstate.schemas';
import {
  ensureBodyIsValidMiddleware,
  ensureTokenIsValidMiddleware,
  ensureTokenIsAdminMiddleware,
  ensureAddressIsUniqueMiddleware,
} from '../middlewares/index.middleware';
import {
  createRealEstateController,
  listAllRealEstatesController,
} from '../controllers/realEstate.controllers';

const realEstateRoutes: Router = Router();

realEstateRoutes.post(
  '',
  ensureBodyIsValidMiddleware(realEstateSchemaRequest),
  ensureTokenIsValidMiddleware,
  ensureTokenIsAdminMiddleware,
  ensureAddressIsUniqueMiddleware,
  createRealEstateController
);

realEstateRoutes.get('', listAllRealEstatesController);

export default realEstateRoutes;
