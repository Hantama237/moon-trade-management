// For more information about this file see https://dove.feathersjs.com/guides/cli/knexfile.html
import type { Knex } from 'knex'

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable('trade', (table) => {
    table.increments('id')
    table.datetime('entry_date')
    table.datetime('exit_date').nullable().defaultTo(null)
    table.string('symbol')
    table.decimal('entry_price',16,4)
    table.decimal('stop_loss_price',16,4)
    table.decimal('take_profit_price',16,4)
    table.decimal('size',16,4)
    table.text('notes').nullable().defaultTo(null)
    table.string('snapshot_path').nullable().defaultTo(null)
    table.integer('user_id').unsigned().references('id').inTable('users')
    table.string('binance_order_id').nullable().defaultTo(null)
    table.string('binance_sl_order_id').nullable().defaultTo(null)
    table.string('binance_tp_order_id').nullable().defaultTo(null)

  })
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable('trade')
}
