/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class ClientTypeSchema extends Schema {
  up() {
    this.create('client_type', (table) => {
      table.increments('id');
      table.string('type').notNullable();
      table.timestamps();
    });
  }

  down() {
    this.drop('client_type');
  }
}

module.exports = ClientTypeSchema;
