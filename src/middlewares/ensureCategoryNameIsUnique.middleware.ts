import { NextFunction, Request, Response } from 'express';
import { Category } from '../entities';
import { AppDataSource } from '../data-source';
import { Repository } from 'typeorm';
import { AppError } from '../error';

const ensureCategoryNameIsUniqueMiddleware = async (
  request: Request,
  response: Response,
  next: NextFunction
): Promise<Response | void> => {
  const newCategoryName: string | undefined = response.locals.name;

  const categoryRepository: Repository<Category> =
    AppDataSource.getRepository(Category);

  if (newCategoryName) {
    const findCategory: Category | null = await categoryRepository.findOne({
      where: {
        name: newCategoryName,
      },
    });

    if (findCategory) {
      throw new AppError('Category already exists', 409);
    }
  }

  return next();
};

export default ensureCategoryNameIsUniqueMiddleware;
