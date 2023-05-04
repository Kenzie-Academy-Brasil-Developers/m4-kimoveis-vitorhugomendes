import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  JoinColumn,
  ManyToOne,
} from 'typeorm';

import User from './users.entity';
import RealEstate from './real_estate.entity';

@Entity('schedules')
class Schedule {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ type: 'date' })
  date: Date;

  @Column({ type: 'time' })
  hour: string | Date;

  @ManyToOne(() => RealEstate)
  realEstate: RealEstate;

  @ManyToOne(() => User)
  user: User;
}

export default Schedule;
