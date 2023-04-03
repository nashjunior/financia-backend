import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateUsersEmployees1680351394419 implements MigrationInterface {
  private table: Table;
  constructor() {
    this.table = new Table({
      name: 'employees',
      schema: 'public',
      columns: [
        {
          name: 'id_employee',
          type: 'int',
          isGenerated: true,
          isPrimary: true,
          generationStrategy: 'increment',
        },
        {
          name: 'uuid_employee',
          type: 'char',
          length: '36',
          isNullable: false,
        },

        { name: 'id_parent_employee', type: 'int', isNullable: true },

        { name: 'id_physical_user', type: 'int', isNullable: false },
        { name: 'id_legal_user', type: 'int', isNullable: true },
      ],
      foreignKeys: [
        {
          name: 'FK_USERS_ACCOUNT',
          referencedSchema: 'public',
          referencedTableName: 'physical_users',
          referencedColumnNames: ['id_physical_user'],
          columnNames: ['id_physical_user'],
        },
        {
          name: 'FK_BANKS_ACCOUNT',
          referencedSchema: 'public',
          referencedTableName: 'legal_users',
          referencedColumnNames: ['id_legal_user'],
          columnNames: ['id_legal_user'],
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
