'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ProfileSchema extends Schema {
  up () {
    this.create('profiles', (table) => {
      table.increments('id')
      table.integer('consumption').notNullable()
      table.integer('client_id')
           .notNullable()
           .references('id')
           .inTable('client')
      table.integer('tile_type_id')
           .notNullable()
           .references('id')
           .inTable('tile_type')
      table.timestamps()
    })
  }

  down () {
    this.drop('profiles')
  }
}

module.exports = ProfileSchema
