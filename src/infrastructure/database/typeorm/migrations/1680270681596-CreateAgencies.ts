import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateAgencies1680270681596 implements MigrationInterface {
  private table: Table;

  constructor() {
    this.table = new Table({
      name: 'banks_agencies',
      schema: 'financials',
      columns: [
        {
          name: 'id_agency',
          type: 'int',
          isGenerated: true,
          isPrimary: true,
          generationStrategy: 'increment',
        },
        { name: 'uuid_agency', type: 'char', length: '36', isNullable: false },
        { name: 'id_bank', type: 'int', isNullable: false },
        { name: 'number', length: '5', type: 'varchar', isNullable: false },
        { name: 'name', type: 'char', length: '36', isNullable: false },
      ],
      foreignKeys: [
        {
          name: 'FK_BANKS_AGENCY',
          referencedSchema: 'financials',
          referencedTableName: 'banks',
          referencedColumnNames: ['id_bank'],
          columnNames: ['id_bank'],
        },
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
