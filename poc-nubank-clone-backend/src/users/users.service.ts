import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private usersRepository: Repository<User>,
  ) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    return await this.usersRepository.save(createUserDto);
  }

  async findAll(): Promise<User[]> {
    return await this.usersRepository.find();
  }

  async findOne(cpf: string): Promise<User> {
    return await this.usersRepository.findOne({
      select: ['cpf', 'name', 'balance'],
      where: [{ cpf }],
    });
  }

  public async editUser(
    cpf: string,
    createUserDto: CreateUserDto,
  ): Promise<User> {
    const editedUser = await this.usersRepository.findOne({
      where: { cpf },
    });

    if (!editedUser) {
      throw new NotFoundException('User not found');
    }

    const result = await this.usersRepository.update({ cpf }, createUserDto);
    console.log(result);
    return { ...editedUser, ...createUserDto };
  }

  public async deleteUser(userId: number): Promise<void> {
    await this.usersRepository.delete(userId);
  }
}
