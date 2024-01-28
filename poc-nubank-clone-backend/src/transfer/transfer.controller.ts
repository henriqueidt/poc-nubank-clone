import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { TransferService } from './transfer.service';
import { CreateTransferDto } from './dto/create-transfer.dto';
import { Transfer } from './entities/transfer.entity';

@Controller('transfer')
export class TransferController {
  constructor(private readonly transferService: TransferService) {}

  @Post('create')
  create(@Body() createTransferDto: CreateTransferDto): Promise<Transfer> {
    return this.transferService.create(createTransferDto);
  }

  @Get()
  findAll() {
    return this.transferService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.transferService.findOne(+id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.transferService.remove(+id);
  }
}
