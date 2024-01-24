import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { BalanceService } from './balance.service';
import { CreateBalanceDto } from './dto/create-balance.dto';
import { UpdateBalanceDto } from './dto/update-balance.dto';

@Controller('balance')
export class BalanceController {
  constructor(private readonly balanceService: BalanceService) {}

  @Post()
  create(@Body() createBalanceDto: CreateBalanceDto) {
    return this.balanceService.create(createBalanceDto);
  }

  @Get()
  findAll() {
    return this.balanceService.findAll();
  }

  @Get(':cpf')
  findOne(@Param('cpf') cpf: string) {
    return this.balanceService.findOne(cpf);
  }

  @Patch(':cpf')
  update(
    @Param('cpf') cpf: string,
    @Body() updateBalanceDto: UpdateBalanceDto,
  ) {
    return this.balanceService.update(+cpf, updateBalanceDto);
  }

  @Delete(':cpf')
  remove(@Param('cpf') id: string) {
    return this.balanceService.remove(id);
  }
}
