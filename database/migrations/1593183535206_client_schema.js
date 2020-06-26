'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ClientSchema extends Schema {
  up () {
    this.create('client', (table) => {
      table.increments()
      table.string('identification').notNullable()
      table.string('cpf_cnpj').notNullable()
      table.string('email')
      table.string('site_url')
      table.integer('address_id')
           .notNullable()
           .references('id')
           .inTable('address')
      table.integer('client_type_id')
           .notNullable()
           .references('id')
           .inTable('client_type')
      table.timestamps()
    })
  }

  down () {
    this.drop('client')
  }
}

module.exports = ClientSchema
