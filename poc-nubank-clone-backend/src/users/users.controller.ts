import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Post('create')
  async create(@Body() createUserDto: CreateUserDto): Promise<User> {
    return await this.usersService.create(createUserDto);
  }

  @Get('/all')
  async findAll(): Promise<User[]> {
    return this.usersService.findAll();
  }

  @Get('/:cpf')
  async findOne(@Param('cpf') cpf: string): Promise<User> {
    return await this.usersService.findOne(cpf);
  }

  @Patch('/edit/:cpf')
  async editUser(
    @Body() createUserDto: CreateUserDto,
    @Param('cpf') cpf: string,
  ): Promise<User> {
    return await this.usersService.editUser(cpf, createUserDto);
  }

  @Delete('/delete/:cpf')
  public async deleteUser(@Param('cpf') cpf: number) {
    return await this.usersService.deleteUser(cpf);
  }
}
