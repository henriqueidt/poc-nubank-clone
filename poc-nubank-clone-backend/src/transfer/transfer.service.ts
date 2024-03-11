import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateTransferDto } from './dto/create-transfer.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/users/entities/user.entity';
import { Repository } from 'typeorm';
import { Transfer } from './entities/transfer.entity';

@Injectable()
export class TransferService {
  constructor(
    @InjectRepository(User) private usersRepository: Repository<User>,
    @InjectRepository(Transfer)
    private transferRepository: Repository<Transfer>,
  ) {}

  async create(transfer: CreateTransferDto): Promise<Transfer> {
    const originUser = await this.usersRepository.findOne({
      select: ['cpf', 'name', 'balance'],
      where: { cpf: transfer.originCpf.replace(/[^\w\s]/gi, '') },
    });
    const destinationUser = await this.usersRepository.findOne({
      select: ['cpf', 'name', 'balance'],
      where: { cpf: transfer.destinationCpf.replace(/[^\w\s]/gi, '') },
    });

    if (!originUser || !destinationUser) {
      throw new NotFoundException('Chave pix nao encontrada!');
    }

    if (originUser.balance < transfer.value) {
      throw new BadRequestException('Saldo insuficiente');
    }

    originUser.balance -= transfer.value;
    destinationUser.balance += transfer.value;

    await this.usersRepository.save(originUser);
    await this.usersRepository.save(destinationUser);

    const transferResult = await this.transferRepository.create({
      origin: originUser,
      destination: destinationUser,
      value: transfer.value,
    });

    return transferResult;
  }

  findAll() {
    return `This action returns all transfer`;
  }

  findOne(id: number) {
    return `This action returns a #${id} transfer`;
  }

  remove(id: number) {
    return `This action removes a #${id} transfer`;
  }
}
