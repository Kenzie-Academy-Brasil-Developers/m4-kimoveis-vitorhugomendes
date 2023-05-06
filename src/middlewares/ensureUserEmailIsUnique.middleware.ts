import { NextFunction, Request, Response } from 'express';
import { Repository } from 'typeorm';
import { User } from '../entities';
import { AppDataSource } from '../data-source';
import { AppError } from '../error';

const ensureUserEmailIsUniqueMiddleware = async (
  request: Request,
  response: Response,
  next: NextFunction
): Promise<Response | void> => {
  const newUserEmail: string | undefined = response.locals.email;

  const userRepository: Repository<User> = AppDataSource.getRepository(User);

  if (newUserEmail) {
    const findUser: User | null = await userRepository.findOne({
      where: {
        email: newUserEmail,
      },
    });

    if (findUser) {
      throw new AppError('Email already exists', 409);
    }
  }

  return next();
};

export default ensureUserEmailIsUniqueMiddleware;
