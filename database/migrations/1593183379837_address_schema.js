/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class AddressSchema extends Schema {
  up() {
    this.create('address', (table) => {
      table.increments('id');
      table.string('street').notNullable();
      table.string('number').notNullable();
      table.string('neighborhood').notNullable();
      table.string('complement').notNullable();
      table.string('city').notNullable();
      table.string('uf').notNullable();
      table.integer('cep').notNullable();
      table.timestamps();
    });
  }

  down() {
    this.drop('address');
  }
}

module.exports = AddressSchema;
