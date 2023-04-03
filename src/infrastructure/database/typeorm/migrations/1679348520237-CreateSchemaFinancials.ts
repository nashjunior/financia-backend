import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateSchemaFinancials1679348520237 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createSchema('financials', true);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropSchema('financials', true);
  }
}
