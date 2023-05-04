import { NextFunction, Request, Response } from 'express';
import { Repository } from 'typeorm';
import app from '../app';
import { User } from '../entities';
import { AppDataSource } from '../data-source';
import { AppError } from '../error';

const ensureEmailIsUniqueMiddleware = async (
  request: Request,
  response: Response,
  next: NextFunction
): Promise<Response | void> => {
  const newUserEmail: string | undefined = response.locals.email;

  const userRepository: Repository<User> = AppDataSource.getRepository(User);

  if (newUserEmail) {
    const findEmail: User | null = await userRepository.findOne({
      where: {
        email: newUserEmail,
      },
    });

    if (findEmail) {
      throw new AppError('Email already exists', 409);
    }
  }

  return next();
};

export default ensureEmailIsUniqueMiddleware;
