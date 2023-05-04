import { Request, Response } from 'express';
import { TLoginRequest, TLoginResponse } from '../interfaces/login.interfaces';
import loginService from '../services/login/login.service';

const loginController = async (
  request: Request,
  response: Response
): Promise<Response> => {
  const loginData: TLoginRequest = request.body;
  const newToken: TLoginResponse = await loginService(loginData);

  return response.json(newToken);
};

export default loginController;
