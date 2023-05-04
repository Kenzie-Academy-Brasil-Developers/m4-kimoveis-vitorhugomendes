import { Request, Response } from 'express';
import { TUserRequest } from '../interfaces/users.interfaces';
import createUserService from '../services/users/createUser.service';
import listUsersService from '../services/users/listUsers.service';

const createUserController = async (
  request: Request,
  response: Response
): Promise<Response> => {
  const userData: TUserRequest = request.body;

  const newUser = await createUserService(userData);

  return response.json(newUser);
};

const listUsersController = async (
  request: Request,
  response: Response
): Promise<Response> => {
  const allUsers = await listUsersService();

  return response.json(allUsers);
};

export { createUserController, listUsersController };
