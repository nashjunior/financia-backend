import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateLegallUers1680271307457 implements MigrationInterface {
  private table: Table;
  constructor() {
    this.table = new Table({
      name: 'legal_users',
      schema: 'public',
      columns: [
        {
          name: 'id_legal_user',
          type: 'int',
          isGenerated: true,
          isPrimary: true,
          generationStrategy: 'increment',
        },
        {
          name: 'uuid_legal_user',
          type: 'char',
          length: '36',
          isNullable: false,
        },
        { name: 'cnpj', type: 'char', length: '16', isNullable: false },
        { name: 'id_user', type: 'int', isNullable: false },
      ],
      foreignKeys: [
        {
          name: 'FK_USERS_LEGAL',
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
