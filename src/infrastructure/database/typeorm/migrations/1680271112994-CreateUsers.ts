import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateUsers1680271112994 implements MigrationInterface {
  private table: Table;
  constructor() {
    this.table = new Table({
      name: 'users',
      schema: 'public',
      columns: [
        {
          name: 'id_user',
          type: 'int',
          isGenerated: true,
          isPrimary: true,
          generationStrategy: 'increment',
        },
        { name: 'uuid_user', type: 'char', length: '36', isNullable: false },
        { name: 'name', type: 'char', length: '36', isNullable: false },
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
