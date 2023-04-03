import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateUsersManagers1680352958082 implements MigrationInterface {
  private table: Table;
  constructor() {
    this.table = new Table({
      name: 'managers_closure',
      schema: 'public',
      columns: [
        { name: 'id_parent_employee', type: 'int', isPrimary: true },
        { name: 'id_child_employee', type: 'int', isPrimary: true },
      ],
      foreignKeys: [
        {
          name: 'FK_PARENT_USER',
          referencedSchema: 'public',
          referencedTableName: 'physical_users',
          referencedColumnNames: ['id_physical_user'],
          columnNames: ['id_parent_employee'],
        },
        {
          name: 'FK_CHILD_USER',
          referencedSchema: 'public',
          referencedTableName: 'physical_users',
          referencedColumnNames: ['id_physical_user'],
          columnNames: ['id_child_employee'],
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
