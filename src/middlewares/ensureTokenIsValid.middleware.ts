import { NextFunction, Request, Response } from 'express';
import { AppError } from '../error';
import { verify } from 'jsonwebtoken';
import { User } from '../entities';
import { Repository } from 'typeorm';
import { AppDataSource } from '../data-source';

const ensureTokenIsValidMiddleware = async (
  request: Request,
  response: Response,
  next: NextFunction
): Promise<Response | void> => {
  const authToken = request.headers.authorization;

  if (!authToken) {
    throw new AppError('Missing bearer token', 401);
  }

  const token: string = authToken.split(' ')[1];

  let userId: number = 0;

  const checkToken = verify(
    token,
    String(process.env.SECRET_KEY),
    (error: any, decoded: any) => {
      if (error) throw new AppError(error.message, 401);

      userId = decoded.sub;
    }
  );

  const userRepository: Repository<User> = AppDataSource.getRepository(User);

  const user: User | null = await userRepository.findOne({
    where: {
      id: userId,
    },
  });

  response.locals.id = user?.id;
  response.locals.admin = user?.admin;
  response.locals.deletedAt = user?.deletedAt;

  return next();
};

export default ensureTokenIsValidMiddleware;
