import { Repository } from 'typeorm';
import {
  TSchedule,
  TScheduleRequest,
} from '../../interfaces/schedules.interfaces';
import { RealEstate, Schedule, User } from '../../entities';
import { AppDataSource } from '../../data-source';
import { AppError } from '../../error';

const createScheduleService = async (
  scheduleData: TScheduleRequest,
  userId: number
): Promise<any> => {
  const { date, hour, realEstateId } = scheduleData;

  const scheduleRepository: Repository<Schedule> =
    AppDataSource.getRepository(Schedule);

  const userRepository: Repository<User> = AppDataSource.getRepository(User);

  const user: User | null = await userRepository.findOne({
    where: {
      id: userId,
    },
  });

  const checkUserSchedule: Schedule | null = await scheduleRepository
    .createQueryBuilder('schedule')
    .where('schedule.date = :date', { date })
    .andWhere('schedule.hour = :hour', { hour })
    .andWhere('schedule.userId = :userId', {
      userId,
    })
    .getOne();

  if (checkUserSchedule) {
    throw new AppError('Usuário já tem horario', 409);
  }

  const realEstateRepository: Repository<RealEstate> =
    AppDataSource.getRepository(RealEstate);

  const realEstate: RealEstate | null = await realEstateRepository.findOne({
    where: {
      id: realEstateId,
    },
  });

  if (!realEstate) {
    throw new AppError('RealEstate not found', 404);
  }

  const checkRealEstateSchedule: Schedule | null = await scheduleRepository
    .createQueryBuilder('schedule')
    .where('schedule.date = :date', { date })
    .andWhere('schedule.hour = :hour', { hour })
    .andWhere('schedule.realEstateId = :realEstateId', {
      realEstateId,
    })
    .getOne();

  if (checkRealEstateSchedule) {
    throw new AppError('RealEstate já tem horario', 409);
  }

  const newSchedule: Schedule = scheduleRepository.create({
    hour,
    date,
    realEstate: realEstate,
    user: user!,
  });
  await scheduleRepository.save(newSchedule);

  return newSchedule;
};

export default createScheduleService;
