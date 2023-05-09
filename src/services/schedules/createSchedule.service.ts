import { Repository } from 'typeorm';
import {
  TSchedule,
  TScheduleRequest,
} from '../../interfaces/schedules.interfaces';
import { Schedule } from '../../entities';
import { AppDataSource } from '../../data-source';

const createScheduleService = async (
  scheduleData: TScheduleRequest,
  userId: number
): Promise<any> => {
  const scheduleRepository: Repository<Schedule> =
    AppDataSource.getRepository(Schedule);

  const { date, hour, realEstateId } = scheduleData;

  const newSchedule: Schedule = scheduleRepository.create({
    date,
    hour,
  });
  await scheduleRepository.save(newSchedule);

  return newSchedule;
};

export default createScheduleService;
