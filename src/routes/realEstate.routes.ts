import { Router } from 'express';
import ensureBodyIsValidMiddleware from '../middlewares/ensureBodyIsValid.middleware';
import { realEstateSchemaRequest } from '../schemas/realEstate.schemas';
import { createRealEstateController } from '../controllers/realEstate.controllers';
import ensureTokenIsValidMiddleware from '../middlewares/ensureTokenIsValid.middleware';
import ensureTokenIsAdminMiddleware from '../middlewares/ensureTokenIsAdmin.middleware';
import ensureAddressIsUniqueMiddleware from '../middlewares/ensureAddressIsUnique.middleware';

const realEstateRoutes: Router = Router();

realEstateRoutes.post(
  '',
  ensureBodyIsValidMiddleware(realEstateSchemaRequest),
  ensureTokenIsValidMiddleware,
  ensureTokenIsAdminMiddleware,
  ensureAddressIsUniqueMiddleware,
  createRealEstateController
);

export default realEstateRoutes;
