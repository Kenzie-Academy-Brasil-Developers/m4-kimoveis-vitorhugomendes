import { Request, Response } from 'express';
import { TUserRequest } from '../interfaces/users.interfaces';
import createUserService from '../services/users/createUser.service';
import listUsersService from '../services/users/listUsers.service';
import editUserByIdService from '../services/users/editUserById.service';
import deleteUserByIdService from '../services/users/deleteUserById.service';

const createUserController = async (
  request: Request,
  response: Response
): Promise<Response> => {
  const userData: TUserRequest = request.body;

  const newUser = await createUserService(userData);

  return response.status(201).json(newUser);
};

const listUsersController = async (
  request: Request,
  response: Response
): Promise<Response> => {
  const allUsers = await listUsersService();

  return response.json(allUsers).send();
};

const editUserByIdController = async (
  request: Request,
  response: Response
): Promise<Response> => {
  const userData: any = request.body;
  const userId: number = Number(request.params.id);

  const editedUser = await editUserByIdService(userData, userId);

  return response.json(editedUser);
};

const deleteUserByIdController = async (
  request: Request,
  response: Response
): Promise<Response> => {
  const userId: number = Number(request.params.id);

  const softDeleteUser = await deleteUserByIdService(userId);

  return response.status(204).send();
};

export {
  createUserController,
  listUsersController,
  editUserByIdController,
  deleteUserByIdController,
};
