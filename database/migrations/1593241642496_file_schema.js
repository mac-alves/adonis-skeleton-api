/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class FileSchema extends Schema {
  up() {
    this.create('files', (table) => {
      table.increments('id');
      table.integer('name').notNullable();
      table.integer('path').notNullable();
      table.integer('client_id')
        .notNullable()
        .references('id')
        .inTable('clients')
        .onDelete('CASCADE');
      table.timestamps();
    });
  }

  down() {
    this.drop('files');
  }
}

module.exports = FileSchema;
