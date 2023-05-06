import { Repository } from 'typeorm';
import { TUserRequest, TUserResponse } from '../../interfaces/users.interfaces';
import { AppDataSource } from '../../data-source';
import { User } from '../../entities';
import { userSchemaResponse } from '../../schemas/users.schemas';

const createUserService = async (
  userData: TUserRequest
): Promise<TUserResponse> => {
  const userRepository: Repository<User> = AppDataSource.getRepository(User);

  const newUser: User = userRepository.create(userData);
  await userRepository.save(newUser);

  const newUserResponse = userSchemaResponse.parse(newUser);

  return newUserResponse;
};

export default createUserService;
