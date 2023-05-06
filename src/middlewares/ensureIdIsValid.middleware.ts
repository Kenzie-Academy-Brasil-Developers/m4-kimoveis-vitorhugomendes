import { NextFunction, Request, Response } from 'express';
import { Repository } from 'typeorm';
import { User } from '../entities';
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

  return next();
};

export default ensureIdIsValidMiddleware;
