const { test, trait } = use('Test/Suite')('Createuser');

/**
 * @type {import('@adonisjs/lucid/src/Factory')}
 * */
const Factory = use('Factory');

trait('Test/ApiClient');
trait('DatabaseTransactions');
trait('Auth/Client');

test('it should be able to create user', async ({ client, assert }) => {
  const infoUser = {
    username: 'mac',
    email: 'mac@gmail.com',
    password: '123456',
    password_confirmation: '123456',
  };

  const response = await client
    .post('/api/v1/users')
    .send(infoUser)
    .end();

  response.assertStatus(201);
  assert.exists(response.body.token);
});

test('it should be able to list users', async ({ client, assert }) => {
  const user = await Factory.model('App/Models/User').create();

  const response = await client
    .get('/api/v1/users')
    .loginVia(user, 'jwt')
    .end();

  response.assertStatus(200);
  assert.equal(response.body[0].id, user.id);
});

test('it should be able to show single user', async ({ client, assert }) => {
  const user = await Factory.model('App/Models/User').create();

  const response = await client
    .get(`/api/v1/user/${user.id}`)
    .loginVia(user, 'jwt')
    .end();

  response.assertStatus(200);
  assert.equal(response.body.id, user.id);
});

// test('it should be able to update single user', async ({ client, assert }) => {
//   const user = await Factory.model('App/Models/User').create();

//   const newInfoUserPlayload = {
//     email: ""
//   }

//   const response = await client
//     .post(`/api/v1/user/${user.id}`)
//     .send()
//     .loginVia(user, 'jwt')
//     .end();

//   response.assertStatus(200);
//   assert.equal(response.body.id, user.id);
// });

test('it should be able to delete the user', async ({ client }) => {
  const password = '123456';
  const user = await Factory.model('App/Models/User').create({ password });

  const response = await client
    .delete('/api/v1/user')
    .send({ password })
    .loginVia(user, 'jwt')
    .end();

  response.assertStatus(200);
});
