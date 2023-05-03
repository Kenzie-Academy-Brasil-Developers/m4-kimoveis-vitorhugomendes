import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  BeforeInsert,
  BeforeUpdate,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
} from 'typeorm';

@Entity('users')
class User {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ type: 'varchar', length: 45 })
  name: string;

  @Column({ type: 'varchar', length: 45, unique: true })
  email: string;

  @Column({ type: 'boolean', default: false })
  admin: boolean;

  @Column({ type: 'varchar', length: 120 })
  password: string;

  @CreateDateColumn()
  createdAt: string | Date;

  @UpdateDateColumn()
  updatedAt: string | Date;

  @DeleteDateColumn({ nullable: true })
  deletedAt?: string | Date | null | undefined;

  // @BeforeInsert()
  // createDate() {
  //   this.createdAt = new Date();
  //   this.updatedAt = new Date();
  // }

  // @BeforeUpdate()
  // updateDate() {
  //   this.updatedAt = new Date();
  // }
}

export default User;
