import { Repository } from 'typeorm';
import { RealEstate, Schedule } from '../../entities';
import { AppDataSource } from '../../data-source';
import { TListAllSchedulesResponse } from '../../interfaces/schedules.interfaces';

const listSchedulesByRealEstateIdService =
  async (): Promise<TListAllSchedulesResponse> => {
    const realStateRepository: Repository<RealEstate> =
      AppDataSource.getRepository(RealEstate);

    const realEstateInfo = await realStateRepository
      .createQueryBuilder('realEstate')
      .innerJoinAndSelect('realEstate.address', 'address')
      .leftJoinAndSelect('realEstate.category', 'category')
      .getOne();

    const scheduleRepository: Repository<Schedule> =
      AppDataSource.getRepository(Schedule);

    const allSchedules = await scheduleRepository
      .createQueryBuilder('schedule')
      .innerJoinAndSelect('schedule.user', 'user')
      .leftJoin('schedule.realEstate', 'realEstate')
      .leftJoinAndSelect('realEstate.address', 'address')
      .getMany();

    const allSchedulesResponse = {
      ...realEstateInfo,
      schedules: allSchedules,
    };

    return allSchedulesResponse;
  };

export default listSchedulesByRealEstateIdService;
