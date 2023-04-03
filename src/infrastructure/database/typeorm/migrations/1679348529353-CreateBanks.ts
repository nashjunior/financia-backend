import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateBanks1679348529353 implements MigrationInterface {
  private table: Table;
  constructor() {
    this.table = new Table({
      name: 'banks',
      schema: 'financials',
      columns: [
        {
          name: 'id_bank',
          type: 'int',
          isGenerated: true,
          isPrimary: true,
          generationStrategy: 'increment',
        },
        { name: 'uuid_bank', type: 'char', length: '36', isNullable: false },
        { name: 'name', type: 'char', length: '36', isNullable: false },
      ],
    });
  }

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(this.table, true);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable(this.table, true);
  }
}
