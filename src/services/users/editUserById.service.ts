import { Repository } from 'typeorm';
import { User } from '../../entities';
import { TUserResponse, TUserUpdate } from '../../interfaces/users.interfaces';
import { AppDataSource } from '../../data-source';
import { userSchemaResponse } from '../../schemas/users.schemas';

const editUserByIdService = async (
  userData: TUserUpdate,
  userId: number
): Promise<TUserResponse> => {
  const userRepository: Repository<User> = AppDataSource.getRepository(User);

  const updateUser = await userRepository
    .createQueryBuilder()
    .update(User)
    .set(userData)
    .where({ id: userId })
    .updateEntity(true)
    .execute();

  const user: User | null = await userRepository.findOne({
    where: {
      id: userId,
    },
  });

  const returnUpdatedUser = userSchemaResponse.parse(user);

  return returnUpdatedUser;
};

export default editUserByIdService;
