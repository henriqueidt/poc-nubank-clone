import { User } from 'src/users/entities/user.entity';
import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Transfer {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne(() => User)
  origin: User;

  @OneToOne(() => User)
  destination: User;

  @Column()
  value: number;
}
