import { Repository } from 'typeorm';
import { RealEstate } from '../../entities';
import { TRealEstate } from '../../interfaces/realEstate.interfaces';
import { AppDataSource } from '../../data-source';

const listAllRealEstatesService = async (): Promise<TRealEstate[]> => {
  const realEstateRepository: Repository<RealEstate> =
    AppDataSource.getRepository(RealEstate);

  const allRealEstates: RealEstate[] = await realEstateRepository.find();

  //   const returnAllUsers: TUserResponse[] =
  //     realEstateSchema.parse(allRealEstates);

  return allRealEstates;
};

export default listAllRealEstatesService;
