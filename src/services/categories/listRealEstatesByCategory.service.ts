import { Repository } from 'typeorm';
import { RealEstate } from '../../entities';
import { AppDataSource } from '../../data-source';
import { allRealEstatesByCategorySchemaResponse } from '../../schemas/realEstate.schemas';
import { TRealEstateByCategoryResponse } from '../../interfaces/categories.interfaces';

const listRealEstatesByCategoryService = async (
  categoryId: number,
  categoryName: string
): Promise<TRealEstateByCategoryResponse> => {
  const realEstateRepository: Repository<RealEstate> =
    AppDataSource.getRepository(RealEstate);

  const allRealEstates: RealEstate | null = await realEstateRepository
    .createQueryBuilder('real_estate')
    .select('*')
    .where('real_estate.categoryId = :id', { id: categoryId })
    .execute();

  console.log(allRealEstates);

  const allRealEstatesResponse =
    allRealEstatesByCategorySchemaResponse.parse(allRealEstates);

  const allRealEstateByCategoryResponse = {
    id: categoryId,
    name: categoryName,
    realEstate: allRealEstatesResponse,
  };

  return allRealEstateByCategoryResponse;
};

export default listRealEstatesByCategoryService;
