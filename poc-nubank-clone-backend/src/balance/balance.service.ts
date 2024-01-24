import { Injectable } from '@nestjs/common';
import { CreateBalanceDto } from './dto/create-balance.dto';
import { UpdateBalanceDto } from './dto/update-balance.dto';

@Injectable()
export class BalanceService {
  create(createBalanceDto: CreateBalanceDto) {
    return 'This action adds a new balance';
  }

  findAll() {
    return `This action returns all balance`;
  }

  findOne(cpf: string) {
    return `This action returns a #${cpf} balance`;
  }

  update(cpf: number, updateBalanceDto: UpdateBalanceDto) {
    return `This action updates a #${cpf} balance`;
  }

  remove(cpf: string) {
    return `This action removes a #${cpf} balance`;
  }
}
