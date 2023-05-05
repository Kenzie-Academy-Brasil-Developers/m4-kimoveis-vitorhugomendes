import { NextFunction, Request, Response } from 'express';
import { AppError } from '../error';
import { verify } from 'jsonwebtoken';

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

  const checkToken = verify(
    token,
    String(process.env.SECRET_KEY),
    (error: any, decoded: any) => {
      if (error) throw new AppError(error.message, 401);

      console.log(decoded.sub);
      console.log(decoded.admin);

      response.locals.id = decoded.sub;
      response.locals.admin = decoded.admin;
    }
  );

  return next();
};

export default ensureTokenIsValidMiddleware;
