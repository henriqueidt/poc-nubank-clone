import { join } from 'path';
import { DataSource } from 'typeorm';

export const connectionSource = new DataSource({
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
});
