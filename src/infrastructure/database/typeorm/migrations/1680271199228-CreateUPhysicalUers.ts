import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateUPhysicalUers1680271199228 implements MigrationInterface {
  private table: Table;
  constructor() {
    this.table = new Table({
      name: 'physical_users',
      schema: 'public',
      columns: [
        {
          name: 'id_physical_user',
          type: 'int',
          isGenerated: true,
          isPrimary: true,
          generationStrategy: 'increment',
        },
        {
          name: 'uuid_physical_user',
          type: 'char',
          length: '36',
          isNullable: false,
        },
        { name: 'cpf', type: 'char', length: '11', isNullable: false },
        { name: 'id_user', type: 'int', isNullable: false },
      ],
      foreignKeys: [
        {
          name: 'FK_USERS_PHYSICAL',
          referencedSchema: 'public',
          referencedTableName: 'users',
          referencedColumnNames: ['id_user'],
          columnNames: ['id_user'],
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
