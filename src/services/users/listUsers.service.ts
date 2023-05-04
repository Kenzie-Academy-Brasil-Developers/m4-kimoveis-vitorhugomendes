import { Repository } from 'typeorm';
import { TUserResponse } from '../../interfaces/users.interfaces';
import { AppDataSource } from '../../data-source';
import { User } from '../../entities';
import { allUsersSchemaResponse } from '../../schemas/users.schemas';

const listUsersService = async (): Promise<TUserResponse[]> => {
  const userRepository: Repository<User> = AppDataSource.getRepository(User);

  const allUsers: User[] = await userRepository.find();

  const returnUsers: TUserResponse[] = allUsersSchemaResponse.parse(allUsers);

  return returnUsers;
};

export default listUsersService;
