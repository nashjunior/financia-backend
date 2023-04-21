import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateInventoryDepreciation1680573131946
  implements MigrationInterface
{
  private table: Table;
  constructor() {
    this.table = new Table({
      name: 'items_depreciation',
      schema: 'financials',
      columns: [
        {
          name: 'id_item_depreciation',
          type: 'int',
          isGenerated: true,
          isPrimary: true,
          generationStrategy: 'increment',
        },
        {
          name: 'uuid_item_depreciation',
          type: 'char',
          length: '36',
          isNullable: false,
        },

        { name: 'id_item', type: 'int', isNullable: false },

        {
          name: 'initial_value',
          type: 'numeric',
          scale: 2,
          precision: 10,
          isNullable: false,
        },

        {
          name: 'depreciation_rate',
          type: 'numeric',
          scale: 2,
          precision: 10,
          isNullable: false,
        },

        { name: 'date', type: 'timestamp', isNullable: false },
      ],
      foreignKeys: [
        {
          name: 'FK_ITEM_DEPRECIATION',
          referencedSchema: 'inventory',
          referencedTableName: 'items',
          referencedColumnNames: ['id_item'],
          columnNames: ['id_item'],
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
