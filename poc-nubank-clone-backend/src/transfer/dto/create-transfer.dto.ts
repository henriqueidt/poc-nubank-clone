import { IsNumber, IsString } from 'class-validator';

export class CreateTransferDto {
  @IsString()
  originCpf: string;

  @IsString()
  destinationCpf: string;

  @IsNumber()
  value: number;
}
