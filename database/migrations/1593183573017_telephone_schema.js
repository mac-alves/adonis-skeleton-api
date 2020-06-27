/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class TelephoneSchema extends Schema {
  up() {
    this.create('telephone', (table) => {
      table.increments('id');
      table.integer('telephone').notNullable();
      table.integer('client_id')
        .notNullable()
        .references('id')
        .inTable('client');
      table.timestamps();
    });
  }

  down() {
    this.drop('telephone');
  }
}

module.exports = TelephoneSchema;
