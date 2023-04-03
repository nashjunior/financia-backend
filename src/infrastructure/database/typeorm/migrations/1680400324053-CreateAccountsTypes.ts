import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateAccountsTypes1680400324053 implements MigrationInterface {
  private table: Table;
  constructor() {
    this.table = new Table({
      name: 'accounts_types',
      schema: 'financials',
      columns: [
        {
          name: 'id_account_type',
          type: 'int',
          isGenerated: true,
          isPrimary: true,
          generationStrategy: 'increment',
        },
        {
          name: 'uuid_account_type',
          type: 'char',
          length: '36',
          isNullable: false,
        },
        { name: 'id_parent_account_type', type: 'int', isNullable: true },
        { name: 'name', type: 'varchar', length: '36', isNullable: false },
        { name: 'type', type: 'char', length: '1', isNullable: false },
      ],
      foreignKeys: [
        {
          name: 'FK_ANCESTOR_ACCOUNT_TYPE',
          referencedSchema: 'financials',
          referencedTableName: 'accounts_types',
          referencedColumnNames: ['id_account_type'],
          columnNames: ['id_parent_account_type'],
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
