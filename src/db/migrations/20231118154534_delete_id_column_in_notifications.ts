import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    return knex.schema.alterTable('notifications', function (table) {
        table.dropColumn('id');
      });
}


export async function down(knex: Knex): Promise<void> {
    return knex.schema.alterTable('notifications', function (table) {
        table.string('id');
      });
}
