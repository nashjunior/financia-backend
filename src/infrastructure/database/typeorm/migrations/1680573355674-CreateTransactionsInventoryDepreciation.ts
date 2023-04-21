import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateTransactionsInventoryDepreciation1680573355674
  implements MigrationInterface
{
  private table: Table;
  constructor() {
    this.table = new Table({
      name: 'transactions_items_depreciation',
      schema: 'financials',
      columns: [
        {
          name: 'id_transaction_item_depreciation',
          type: 'int',
          isGenerated: true,
          isPrimary: true,
          generationStrategy: 'increment',
        },
        {
          name: 'uuid_transaction_item_depreciation',
          type: 'char',
          length: '36',
          isNullable: false,
        },

        { name: 'id_item_depreciation', type: 'int', isNullable: false },
        { name: 'id_transaction', type: 'int', isNullable: false },

        {
          name: 'amount_depreciated',
          type: 'numeric',
          scale: 2,
          precision: 10,
          isNullable: false,
        },
      ],
      foreignKeys: [
        {
          name: 'FK_TRANSACTION_TRANSACTION_ITEM_DEPRECIATION',
          referencedSchema: 'financials',
          referencedTableName: 'transactions',
          referencedColumnNames: ['id_transaction'],
          columnNames: ['id_transaction'],
        },
        {
          name: 'FK_ITEM_DEPRECIATION_TRANSACTION_ITEM_DEPRECIATION',
          referencedSchema: 'financials',
          referencedTableName: 'items_depreciation',
          referencedColumnNames: ['id_item_depreciation'],
          columnNames: ['id_item_depreciation'],
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
