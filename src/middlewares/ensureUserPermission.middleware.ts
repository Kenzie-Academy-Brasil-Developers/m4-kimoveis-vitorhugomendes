import { NextFunction, Request, Response } from 'express';
import { AppError } from '../error';

const ensureUserPermissionMiddleware = async (
  request: Request,
  response: Response,
  next: NextFunction
): Promise<Response | void> => {
  const admin: boolean = response.locals.admin;
  const userId: number = response.locals.id;
  const paramsId: number = Number(request.params.id);

  if (userId != paramsId && admin == false) {
    throw new AppError('Insufficient permission', 403);
  }

  return next();
};

export default ensureUserPermissionMiddleware;
