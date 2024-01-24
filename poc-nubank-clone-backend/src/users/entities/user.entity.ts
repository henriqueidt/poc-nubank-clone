import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryColumn()
  cpf: string;

  @Column()
  name: string;

  @Column()
  balance: number;

  @Column()
  password: string;
}
