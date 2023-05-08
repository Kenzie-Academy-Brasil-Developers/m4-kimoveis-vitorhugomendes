import { Router } from 'express';
import ensureBodyIsValidMiddleware from '../middlewares/ensureBodyIsValid.middleware';
import { categorySchemaRequest } from '../schemas/categories.schemas';
import {
  createCategoryControlller,
  listCategoriesController,
  listRealEstatesByCategoryController,
} from '../controllers/categories.controllers';
import ensureTokenIsValidMiddleware from '../middlewares/ensureTokenIsValid.middleware';
import ensureTokenIsAdminMiddleware from '../middlewares/ensureTokenIsAdmin.middleware';
import ensureCategoryNameIsUniqueMiddleware from '../middlewares/ensureCategoryNameIsUnique.middleware';
import ensureIdIsValidMiddleware from '../middlewares/ensureIdIsValid.middleware';

const categoriesRoutes: Router = Router();

categoriesRoutes.post(
  '',
  ensureBodyIsValidMiddleware(categorySchemaRequest),
  ensureTokenIsValidMiddleware,
  ensureTokenIsAdminMiddleware,
  ensureCategoryNameIsUniqueMiddleware,
  createCategoryControlller
);

categoriesRoutes.get('', listCategoriesController);

categoriesRoutes.get(
  '/:id/realEstate',
  ensureIdIsValidMiddleware,
  listRealEstatesByCategoryController
);

export default categoriesRoutes;
