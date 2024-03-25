import type { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    await knex.schema.alterTable('message', (table) => {
        table.datetime('created_at')
        table.integer('user_id').unsigned().references('id').inTable('users')
    })
}


export async function down(knex: Knex): Promise<void> {
    await knex.schema.alterTable('message', (table) => {
        table.dropColumn('created_at')
        table.dropColumn('user_id')
    })
}

