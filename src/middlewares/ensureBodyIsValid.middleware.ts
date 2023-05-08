import { NextFunction, Request, Response } from 'express';
import { ZodTypeAny } from 'zod';

const ensureBodyIsValidMiddleware =
  (schema: ZodTypeAny) =>
  (request: Request, response: Response, next: NextFunction) => {
    response.locals.email = request.body.email;
    response.locals.name = request.body.name;
    response.locals.address = request.body.address;

    const validatedBody = schema.parse(request.body);

    request.body = validatedBody;

    return next();
  };

export default ensureBodyIsValidMiddleware;
