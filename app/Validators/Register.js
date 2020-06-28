const Antl = use('Antl');

class Register {
  get validateAll() {
    return true;
  }

  get rules() {
    return {
      username: 'required',
      email: 'email|required',
      password: 'required|confirmed',
    };
  }

  get messages() {
    return Antl.list('validation');
  }
}

module.exports = Register;
