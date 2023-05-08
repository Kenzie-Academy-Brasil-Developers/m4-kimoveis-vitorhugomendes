import { Request, Response } from 'express';
import { createCategoryService } from '../services/categories/createCategory.service';
import listCategoriesService from '../services/categories/listCategories.service';
import listRealEstatesByCategoryService from '../services/categories/listRealEstatesByCategory.service';

const createCategoryControlller = async (
  request: Request,
  response: Response
): Promise<Response> => {
  const categoryData = request.body;

  const newCategory = await createCategoryService(categoryData);

  return response.status(201).json(newCategory);
};

const listCategoriesController = async (
  request: Request,
  response: Response
): Promise<Response> => {
  const allCategories = await listCategoriesService();

  return response.json(allCategories).send();
};

const listRealEstatesByCategoryController = async (
  request: Request,
  response: Response
): Promise<Response> => {
  const categoryId = Number(request.params.id);
  const categoryName = response.locals.categoryName;

  const allRealEstates = await listRealEstatesByCategoryService(
    categoryId,
    categoryName
  );

  return response.json(allRealEstates).send();
};

export {
  createCategoryControlller,
  listCategoriesController,
  listRealEstatesByCategoryController,
};
