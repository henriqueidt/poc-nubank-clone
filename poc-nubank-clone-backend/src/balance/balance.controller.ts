import { Controller, Get, Param } from '@nestjs/common';
import { BalanceService } from './balance.service';

@Controller('balance')
export class BalanceController {
  constructor(private readonly balanceService: BalanceService) {}

  @Get(':cpf')
  findOne(@Param('cpf') cpf: string) {
    return this.balanceService.findOne(cpf);
  }
}
