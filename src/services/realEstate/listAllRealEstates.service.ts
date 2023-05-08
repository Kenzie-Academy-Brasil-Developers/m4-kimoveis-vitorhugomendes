import { Repository } from 'typeorm';
import { RealEstate } from '../../entities';
import { TRealEstate } from '../../interfaces/realEstate.interfaces';
import { AppDataSource } from '../../data-source';

const listAllRealEstatesService = async (): Promise<TRealEstate[]> => {
  const realEstateRepository: Repository<RealEstate> =
    AppDataSource.getRepository(RealEstate);

  const allRealEstates: RealEstate[] = await realEstateRepository
    .createQueryBuilder('real_estates')
    .innerJoinAndSelect('real_estates.address', 'address')
    .getMany();

  return allRealEstates;
};

export default listAllRealEstatesService;
