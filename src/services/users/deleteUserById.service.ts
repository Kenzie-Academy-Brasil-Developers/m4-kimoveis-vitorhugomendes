import { Repository } from 'typeorm';
import { User } from '../../entities';
import { AppDataSource } from '../../data-source';

const deleteUserByIdService = async (userId: number): Promise<void> => {
  const userRepository: Repository<User> = AppDataSource.getRepository(User);

  const softDeleteUser = await userRepository
    .createQueryBuilder('users')
    .softDelete()
    .where({ id: userId })
    .execute();

  return;
};

export default deleteUserByIdService;
