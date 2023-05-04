import { Repository } from 'typeorm';
import { AppDataSource } from '../../data-source';
import { User } from '../../entities';
import {
  TLoginRequest,
  TLoginResponse,
} from '../../interfaces/login.interfaces';
import { AppError } from '../../error';
import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';

const loginService = async (
  loginData: TLoginRequest
): Promise<TLoginResponse> => {
  const userRepository: Repository<User> = AppDataSource.getRepository(User);

  const user: User | null = await userRepository.findOneBy({
    email: loginData.email,
  });

  if (!user) {
    throw new AppError('Wrong email/password', 401);
  }

  const passwordMatch: boolean = await compare(
    loginData.password,
    user.password
  );

  if (!passwordMatch) {
    throw new AppError('Wrong email/password', 401);
  }

  if (user.deletedAt) {
    throw new AppError('Deleted User', 401);
  }

  const token: string = sign(
    { admin: user.admin },
    String(process.env.SECRET_KEY),
    { expiresIn: '24h', subject: String(user.id) }
  );

  return { token: token };
};

export default loginService;
