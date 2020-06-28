/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class ClientSchema extends Schema {
  up() {
    this.create('clients', (table) => {
      table.increments();
      table.string('identification').notNullable();
      table.string('cpf_cnpj').notNullable();
      table.string('email');
      table.string('site_url');
      table.integer('address_id')
        .notNullable()
        .references('id')
        .inTable('adresses');
      table.integer('client_type_id')
        .notNullable()
        .references('id')
        .inTable('client_types');
      table.timestamps();
    });
  }

  down() {
    this.drop('clients');
  }
}

module.exports = ClientSchema;
