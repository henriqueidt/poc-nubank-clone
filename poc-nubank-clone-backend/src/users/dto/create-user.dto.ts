import { IsNumber, IsString } from 'class-validator';

export class CreateUserDto {
  @IsString()
  cpf: string;

  @IsString()
  name: string;

  @IsNumber()
  balance: number;

  @IsString()
  password: string;
}
