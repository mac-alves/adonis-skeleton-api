const { test, trait } = use('Test/Suite')('Session')
/**
 * @type {import('@adonisjs/lucid/src/Factory')}
 * */
const Factory = use('Factory')

/**
 * @type {typeof import('@adonisjs/lucid/src/Lucid/Model')}
 * */
const User = use('App/Models/User')

trait('Test/ApiClient')

test('it should return JWT token when session created', async ({ assert, client }) => {
  const sessrionPlayload = {
    email: 'mac@gmail.com',
    password: '123456'
  }

  await Factory
    .model('App/Models/User')
    .create(sessrionPlayload);

  const response = await client
    .post('/api/v1/session')
    .send(sessrionPlayload)
    .end();

  response.assertStatus(200)
  assert.exists(response.body.token)
})
