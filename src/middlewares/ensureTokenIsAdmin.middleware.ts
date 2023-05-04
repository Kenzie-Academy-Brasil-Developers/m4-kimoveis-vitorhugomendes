import { NextFunction, Request, Response } from 'express';
import { AppError } from '../error';

const ensureTokenIsAdminMiddleware = (
  request: Request,
  response: Response,
  next: NextFunction
): Response | void => {
  const admin = response.locals.admin;

  if (!admin) {
    throw new AppError('Insufficient permission', 403);
  }

  return next();
};

export default ensureTokenIsAdminMiddleware;
