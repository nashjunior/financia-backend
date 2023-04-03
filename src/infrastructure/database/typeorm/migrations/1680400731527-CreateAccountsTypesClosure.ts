import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateAccountsTypesClosure1680400731527
  implements MigrationInterface
{
  private table: Table;
  constructor() {
    this.table = new Table({
      name: 'accounts_types_closure',
      schema: 'financials',
      columns: [
        { name: 'id_parent_account_type', type: 'int', isPrimary: true },
        { name: 'id_child_account_type', type: 'int', isPrimary: true },
      ],
      foreignKeys: [
        {
          name: 'FK_PARENT_ACCOUNT_TYPE',
          referencedSchema: 'financials',
          referencedTableName: 'accounts_types',
          referencedColumnNames: ['id_account_type'],
          columnNames: ['id_parent_account_type'],
        },
        {
          name: 'FK_CHILD_ACCOUNT_TYPE',
          referencedSchema: 'financials',
          referencedTableName: 'accounts_types',
          referencedColumnNames: ['id_account_type'],
          columnNames: ['id_child_account_type'],
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
