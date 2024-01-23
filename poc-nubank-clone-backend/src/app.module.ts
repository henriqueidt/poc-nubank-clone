import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { BalanceModule } from './balance/balance.module';
import { TransferModule } from './transfer/transfer.module';

@Module({
  imports: [AuthModule, BalanceModule, TransferModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
