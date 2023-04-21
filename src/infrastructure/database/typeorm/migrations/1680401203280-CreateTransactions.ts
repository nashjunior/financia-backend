import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateTransactions1680401203280 implements MigrationInterface {
  private table: Table;
  constructor() {
    this.table = new Table({
      name: 'transactions',
      schema: 'financials',
      columns: [
        {
          name: 'id_transaction',
          type: 'int',
          isGenerated: true,
          isPrimary: true,
          generationStrategy: 'increment',
        },
        {
          name: 'uuid_transaction',
          type: 'char',
          length: '36',
          isNullable: false,
        },
        { name: 'date', type: 'timestamp', isNullable: false },
        { name: 'id_account_type', type: 'int', isNullable: false },
        { name: 'id_user_bank_account', type: 'int', isNullable: false },
        {
          name: 'amount',
          type: 'numeric',
          scale: 2,
          precision: 10,
          isNullable: false,
        },
        {
          name: 'fee',
          type: 'numeric',
          scale: 2,
          precision: 10,
          isNullable: true,
        },
        { name: 'observation', type: 'text', isNullable: true },
      ],
      foreignKeys: [
        {
          name: 'FK_TRANSACTION_ACCOUNT_TYPE',
          referencedSchema: 'financials',
          referencedTableName: 'accounts_types',
          referencedColumnNames: ['id_account_type'],
          columnNames: ['id_account_type'],
        },
        {
          name: 'FK_TRANSACTION_USER_ACCOUNT',
          referencedSchema: 'financials',
          referencedTableName: 'users_banks_accounts',
          referencedColumnNames: ['id_user_bank_account'],
          columnNames: ['id_user_bank_account'],
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
