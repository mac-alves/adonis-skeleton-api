/**
 * @type {typeof import('@adonisjs/lucid/src/Lucid/Model')}
 * */
const User = use('App/Models/User');
const Hash = use('Hash');

class UserController {
  async index() {
    const users = await User.all();

    return users;
  }

  async show({ params }) {
    const user = await User.findOrFail(params.id);

    return user;
  }

  async store({ request, response, auth }) {
    const { username, email, password } = request.only([
      'username',
      'email',
      'password',
    ]);

    const user = await User.create({ username, email, password });
    const { token } = await auth.attempt(user.email, password);

    return response.status(201).json({ user, token });
  }

  async destroy({ request, response, auth }) {
    const password = request.input('password');
    const userLogged = await auth.getUser();

    const user = await User.findOrFail(userLogged.id);
    const isSame = await Hash.verify(password, user.password);

    if (isSame) {
      await user.delete();
      return response.status(200).json();
    }

    return response.status(401).json({ error: 'Invalid password.' });
  }
}

module.exports = UserController;
