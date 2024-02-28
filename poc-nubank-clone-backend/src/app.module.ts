import { Module } from '@nestjs/common';
import { join } from 'path';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { BalanceModule } from './balance/balance.module';
import { TransferModule } from './transfer/transfer.module';
import { User } from './users/entities/user.entity';
import { UsersModule } from './users/users.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    AuthModule,
    BalanceModule,
    TransferModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '127.0.0.1',
      port: 3306,
      username: 'user1',
      password: 'user123USER123',
      database: 'nubank-clone',
      // Grabs all entity files in project
      entities: [join(__dirname, '**', '*.entity.{ts,js}')],
      // migrations: [join(__dirname, '**', '/migrations/*.entity.{ts,js}')],
      // migrationsTableName: 'migrations_table',
      synchronize: false,
      ssl: {
        rejectUnauthorized: false,
      },
      // autoLoadEntities: true,
    }),
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}
