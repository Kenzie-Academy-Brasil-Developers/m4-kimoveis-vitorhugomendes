import { Repository } from 'typeorm';
import { User } from '../../entities';
import { TUserResponse, TUserUpdate } from '../../interfaces/users.interfaces';
import { AppDataSource } from '../../data-source';
import { userSchemaResponse } from '../../schemas/users.schemas';
import { hash } from 'bcryptjs';

const editUserByIdService = async (
  userData: TUserUpdate,
  userId: number
): Promise<TUserResponse> => {
  const userRepository: Repository<User> = AppDataSource.getRepository(User);

  const oldUserData: User | null = await userRepository.findOneBy({
    id: userId,
  });

  const newUserData: User = userRepository.create({
    ...oldUserData,
    ...userData,
  });

  await userRepository.save(newUserData);

  const returnUpdatedUser = userSchemaResponse.parse(newUserData);

  return returnUpdatedUser;
};

export default editUserByIdService;
