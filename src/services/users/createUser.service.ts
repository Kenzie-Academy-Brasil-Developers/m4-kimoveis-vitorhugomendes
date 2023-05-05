import { Repository } from 'typeorm';
import { TUserRequest, TUserResponse } from '../../interfaces/users.interfaces';
import { AppDataSource } from '../../data-source';
import { hash } from 'bcryptjs';
import { User } from '../../entities';
import { userSchemaResponse } from '../../schemas/users.schemas';

const createUserService = async (
  userData: TUserRequest
): Promise<TUserResponse> => {
  // const hashedPassword = await hash(userData.password, 10);
  // const newUserData = { ...userData, password: hashedPassword };

  const userRepository: Repository<User> = AppDataSource.getRepository(User);

  const user: User = userRepository.create(userData);
  await userRepository.save(user);

  const newUserResponse = userSchemaResponse.parse(user);

  return newUserResponse;
};

export default createUserService;
