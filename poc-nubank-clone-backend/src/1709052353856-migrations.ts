import { MigrationInterface, QueryRunner } from 'typeorm';

export class Migrations1709052353856 implements MigrationInterface {
  name = 'Migrations1709052353856';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE \`user\` (\`cpf\` varchar(255) NOT NULL, \`name\` varchar(255) NOT NULL, \`balance\` int NOT NULL, \`password\` varchar(255) NOT NULL, PRIMARY KEY (\`cpf\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `CREATE TABLE \`transfer\` (\`id\` int NOT NULL AUTO_INCREMENT, \`value\` int NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE \`transfer\``);
    await queryRunner.query(`DROP TABLE \`user\``);
  }
}
