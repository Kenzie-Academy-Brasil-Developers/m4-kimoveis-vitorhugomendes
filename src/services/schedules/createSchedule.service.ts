import { Repository } from 'typeorm';
import {
  TSchedule,
  TScheduleRequest,
} from '../../interfaces/schedules.interfaces';
import { RealEstate, Schedule, User } from '../../entities';
import { AppDataSource } from '../../data-source';
import { AppError } from '../../error';
import app from '../../app';

const createScheduleService = async (
  scheduleData: TScheduleRequest,
  userId: number
): Promise<any> => {
  const { date, hour, realEstateId } = scheduleData;

  const newScheduleDate = new Date(`${date},${hour}`);

  const newScheduleHour = newScheduleDate.getHours();

  const newScheduleDay = newScheduleDate.getDay();

  if (newScheduleHour < 8 || newScheduleHour > 18) {
    throw new AppError('Invalid hour, available times are 8AM to 18PM', 400);
  }

  if (newScheduleDay == 1 || newScheduleDay == 6) {
    throw new AppError('Invalid date, work days are monday to friday', 400);
  }

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
    throw new AppError(
      'User schedule to this real estate at this date and time already exists',
      409
    );
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
    throw new AppError(
      'Schedule to this real estate at this date and time already exists',
      409
    );
  }

  const newSchedule: Schedule = scheduleRepository.create({
    hour,
    date,
    realEstate: realEstate,
    user: user!,
  });
  await scheduleRepository.save(newSchedule);

  return { message: 'Schedule created' };
};

export default createScheduleService;
