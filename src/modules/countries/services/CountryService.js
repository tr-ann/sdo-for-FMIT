const CountryRepository = require('../repositories/CountryRepository');

class CountryService {

  async readAll() {
    return await CountryRepository.readAll();
  }

  async get(options) {
    return await CountryRepository.get(options);
  }
}

module.exports = new CountryService();