import { Request, Response } from 'express';
import { createCategoryService } from '../services/categories/createCategory.service';
import listCategoriesService from '../services/categories/listCategories.service';

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

export { createCategoryControlller, listCategoriesController };
