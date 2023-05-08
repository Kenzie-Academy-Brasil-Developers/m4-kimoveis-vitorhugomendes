import { Repository } from 'typeorm';
import {
  TRealEstate,
  TRealEstateRequest,
} from '../../interfaces/realEstate.interfaces';
import { AppDataSource } from '../../data-source';
import { Address, Category, RealEstate } from '../../entities';
import { realEstateSchema } from '../../schemas/realEstate.schemas';
import { AppError } from '../../error';

const createRealEstateService = async (
  realEstateData: TRealEstateRequest
): Promise<TRealEstate> => {
  const addressRepository: Repository<Address> =
    AppDataSource.getRepository(Address);

  const { address, categoryId, ...newRealEstateData } = realEstateData;

  const newAddress: Address = addressRepository.create(address);
  await addressRepository.save(newAddress);

  const categoryRepository: Repository<Category> =
    AppDataSource.getRepository(Category);

  const category = await categoryRepository.findOneBy({
    id: categoryId,
  });

  if (!category) {
    throw new AppError('categoria não encontrada', 404);
  }

  const realEstateRepository: Repository<RealEstate> =
    AppDataSource.getRepository(RealEstate);

  const newRealEstate: RealEstate = realEstateRepository.create({
    ...newRealEstateData,
    address: newAddress,
    category,
  });
  await realEstateRepository.save(newRealEstate);

  const newRealEstateResponse = realEstateSchema.parse(newRealEstate);

  return newRealEstateResponse;
};

export default createRealEstateService;
