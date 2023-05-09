import { Router } from 'express';
import { categorySchemaRequest } from '../schemas/categories.schemas';
import {
  ensureBodyIsValidMiddleware,
  ensureTokenIsValidMiddleware,
  ensureTokenIsAdminMiddleware,
  ensureCategoryNameIsUniqueMiddleware,
  ensureIdIsValidMiddleware,
} from '../middlewares/index.middleware';
import {
  createCategoryControlller,
  listCategoriesController,
  listRealEstatesByCategoryController,
} from '../controllers/categories.controllers';

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
