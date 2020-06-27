/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class TileTypeSchema extends Schema {
  up() {
    this.create('tile_type', (table) => {
      table.increments('id');
      table.string('name').notNullable();
      table.timestamps();
    });
  }

  down() {
    this.drop('tile_type');
  }
}

module.exports = TileTypeSchema;
