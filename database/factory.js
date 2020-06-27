/*
|--------------------------------------------------------------------------
| Factory
|--------------------------------------------------------------------------
|
| Factories are used to define blueprints for database tables or Lucid
| models. Later you can use these blueprints to seed your database
| with dummy data.
|
*/

/**
 * @type {import('@adonisjs/lucid/src/Factory')}
 * */
const Factory = use('Factory');

Factory.blueprint('App/Models/User', async (faker, i, data) => ({
  username: faker.name(),
  email: faker.email(),
  password: faker.string(),
  ...data,
}));

Factory.blueprint('App/Models/Token', async (faker, i, data = {}) => ({
  type: data.type || 'refreshtoken',
  token: faker.string({ length: 20 }),
  ...data,
}));
