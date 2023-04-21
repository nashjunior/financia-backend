import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateTaxes1680571802762 implements MigrationInterface {
  private table: Table;
  constructor() {
    this.table = new Table({
      name: 'taxes',
      schema: 'financials',
      columns: [
        {
          name: 'id_tax',
          type: 'int',
          isGenerated: true,
          isPrimary: true,
          generationStrategy: 'increment',
        },
        { name: 'uuid_tax', type: 'char', length: '36', isNullable: false },
        { name: 'expiration_date', type: 'date', isNullable: false },

        { name: 'id_transaction', type: 'int', isNullable: false },

        {
          name: 'amount_payable',
          type: 'numeric',
          scale: 2,
          precision: 10,
          isNullable: false,
        },
      ],
      foreignKeys: [
        {
          name: 'FK_TRANSACTION_TAX',
          referencedSchema: 'financials',
          referencedTableName: 'transactions',
          referencedColumnNames: ['id_transaction'],
          columnNames: ['id_transaction'],
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
