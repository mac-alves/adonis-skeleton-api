const Antl = use('Antl');

class Destroy {
  get validateAll() {
    return true;
  }

  get rules() {
    return {
      password: 'required',
    };
  }

  get messages() {
    return Antl.list('validation');
  }
}

module.exports = Destroy;
