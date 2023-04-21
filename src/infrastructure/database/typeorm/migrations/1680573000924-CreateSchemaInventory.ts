import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateSchemaInventory1680573000924 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createSchema('inventory');
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropSchema('inventory');
  }
}
