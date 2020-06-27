'use strict'

const Mail = use('Mail')
const { randomBytes } = require('crypto');
const { promisify } = require('util');
/**
 * @type {typeof import('@adonisjs/lucid/src/Lucid/Model')}
 * */
const User = use('App/Models/User')
const Env = use('Env')

class ForgotPasswordController {
  async store({ request }){
    const email = request.input('email');

    const user = await User.findByOrFail('email', email);

    const random = await promisify(randomBytes)(16);
    const token = random.toString('hex');

    await user.tokens().create({
      token,
      type: 'forgotpassword'
    })

    const resetPasswordUrl = `${Env.get('FRONT_URL')}/resetpassword?token=${token}`;

    await Mail.send(
      'emails.forgotpassword',
      { name: user.name, resetPasswordUrl },
      (message) => {
        message
          .to(user.email)
          .from('noreplay@macalves.com')
          .subject('Power - Recuperação de senha')
      })

    return
  }
}

module.exports = ForgotPasswordController
