import { NextFunction, Request, Response } from 'express';
import { Repository } from 'typeorm';
import { Category, User } from '../entities';
import { AppDataSource } from '../data-source';
import { AppError } from '../error';

const ensureIdIsValidMiddleware = async (
  request: Request,
  response: Response,
  next: NextFunction
): Promise<Response | void> => {
  const baseUrl = request.baseUrl;

  if (baseUrl === '/users') {
    const userId: number = Number(request.params.id);

    const userRepository: Repository<User> = AppDataSource.getRepository(User);

    if (userId) {
      const findUser: User | null = await userRepository.findOne({
        where: {
          id: userId,
        },
      });

      if (!findUser) {
        throw new AppError('User not found', 404);
      }
    }
  }

  if (baseUrl === '/categories') {
    const categoryId: number = Number(request.params.id);

    const categoryRepository: Repository<Category> =
      AppDataSource.getRepository(Category);

    if (categoryId) {
      const findCategory: Category | null = await categoryRepository.findOne({
        where: {
          id: categoryId,
        },
      });

      if (!findCategory) {
        throw new AppError('Category not found', 404);
      }
      response.locals.categoryName = findCategory.name;
    }
  }

  return next();
};

export default ensureIdIsValidMiddleware;
