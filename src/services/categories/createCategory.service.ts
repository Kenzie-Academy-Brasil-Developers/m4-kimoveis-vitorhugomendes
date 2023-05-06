import { Repository } from 'typeorm';
import { Category } from '../../entities';
import {
  TCategory,
  TCategoryRequest,
} from '../../interfaces/categories.interfaces';
import { AppDataSource } from '../../data-source';
import { categorySchema } from '../../schemas/categories.schemas';

const createCategoryService = async (
  categoryData: TCategoryRequest
): Promise<TCategory> => {
  const categoryRepository: Repository<Category> =
    AppDataSource.getRepository(Category);

  const newCategory: Category = categoryRepository.create(categoryData);
  await categoryRepository.save(newCategory);

  const returnNewCategory = categorySchema.parse(newCategory);

  return returnNewCategory;
};

export { createCategoryService };
