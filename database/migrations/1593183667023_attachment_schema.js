/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class AttachmentSchema extends Schema {
  up() {
    this.create('attachment', (table) => {
      table.increments('id');
      table.integer('name').notNullable();
      table.integer('path').notNullable();
      table.integer('client_id')
        .notNullable()
        .references('id')
        .inTable('client');
      table.timestamps();
    });
  }

  down() {
    this.drop('attachment');
  }
}

module.exports = AttachmentSchema;
