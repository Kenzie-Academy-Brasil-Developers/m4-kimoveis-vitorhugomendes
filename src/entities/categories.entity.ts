import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import RealEstate from './real_estate.entity';

@Entity('categories')
class Category {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ type: 'varchar', length: 45, unique: true })
  name: string;

  @OneToMany(() => RealEstate, (realEstate) => realEstate.id)
  realEstate: RealEstate[];
}

export default Category;
