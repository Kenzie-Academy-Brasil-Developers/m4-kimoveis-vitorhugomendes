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

  if (userData.password) {
    const hashedPassword = await hash(userData.password, 10);
    const newUserData = { ...userData, password: hashedPassword };

    userData = newUserData;
  }

  const updateUser = await userRepository
    .createQueryBuilder('users')
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
