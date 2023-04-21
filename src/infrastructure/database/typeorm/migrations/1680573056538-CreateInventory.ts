import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateInventory1680573056538 implements MigrationInterface {
  private table: Table;
  constructor() {
    this.table = new Table({
      name: 'items',
      schema: 'inventory',
      columns: [
        {
          name: 'id_item',
          type: 'int',
          isGenerated: true,
          isPrimary: true,
          generationStrategy: 'increment',
        },
        {
          name: 'uuid_item',
          type: 'char',
          length: '36',
          isNullable: false,
        },

        { name: 'name', type: 'text', isNullable: true },
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
