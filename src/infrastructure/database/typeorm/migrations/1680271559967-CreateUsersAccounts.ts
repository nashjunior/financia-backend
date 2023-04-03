import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateUsersAccounts1680271559967 implements MigrationInterface {
  private table: Table;
  constructor() {
    this.table = new Table({
      name: 'users_banks_accounts',
      schema: 'financials',
      columns: [
        {
          name: 'id_user_bank_account',
          type: 'int',
          isGenerated: true,
          isPrimary: true,
          generationStrategy: 'increment',
        },
        {
          name: 'uuid_user_bank_account',
          type: 'char',
          length: '36',
          isNullable: false,
        },
        {
          name: 'account_number',
          type: 'char',
          length: '10',
          isNullable: false,
        },
        { name: 'id_user', type: 'int', isNullable: false },
        { name: 'id_agency', type: 'int', isNullable: false },
      ],
      foreignKeys: [
        {
          name: 'FK_USERS_ACCOUNT',
          referencedSchema: 'public',
          referencedTableName: 'users',
          referencedColumnNames: ['id_user'],
          columnNames: ['id_user'],
        },
        {
          name: 'FK_AGENCIES_ACCOUNT',
          referencedSchema: 'financials',
          referencedTableName: 'banks_agencies',
          referencedColumnNames: ['id_agency'],
          columnNames: ['id_agency'],
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
