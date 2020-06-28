/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class TelephoneSchema extends Schema {
  up() {
    this.create('telephones', (table) => {
      table.increments('id');
      table.integer('telephone').notNullable();
      table.integer('client_id')
        .notNullable()
        .references('id')
        .inTable('clients')
        .onDelete('CASCADE');
      table.timestamps();
    });
  }

  down() {
    this.drop('telephones');
  }
}

module.exports = TelephoneSchema;
