import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/users/entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class BalanceService {
  constructor(
    @InjectRepository(User) private usersRepository: Repository<User>,
  ) {}
  async findOne(cpf: string) {
    return await this.usersRepository.findOne({
      select: ['balance'],
      where: [{ cpf }],
    });
  }
}
