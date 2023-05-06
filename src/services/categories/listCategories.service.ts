import { Repository } from 'typeorm';
import { Category } from '../../entities';
import { TCategory } from '../../interfaces/categories.interfaces';
import { AppDataSource } from '../../data-source';
import { allCategoriesSchemaResponse } from '../../schemas/categories.schemas';

const listCategoriesService = async (): Promise<TCategory[]> => {
  const userRepository: Repository<Category> =
    AppDataSource.getRepository(Category);

  const allCategories: Category[] = await userRepository.find();

  const returnAllCategories: TCategory[] =
    allCategoriesSchemaResponse.parse(allCategories);

  return returnAllCategories;
};

export default listCategoriesService;
