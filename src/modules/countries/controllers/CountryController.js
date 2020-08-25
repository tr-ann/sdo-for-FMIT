const CountryService = require('../services/CountryService');
const { responseFormat } = require('../../../helpers');

class CountryController {

  async readAll(req, res, next) {
      
    let countries = await CountryService.readAll();
    
    res
      .status(200)
      .json(
        responseFormat.build(
          countries,
          "Countries read successfully",
          200,
          "success"
        )
      );
  }

  async get(req, res, next) {
    let countries = await CountryService.get(req.query);

    res
      .status(200)
      .json(
        responseFormat.build(
          countries,
          "Countries read successfully",
          200,
          "success"
        )
      );
  }

}

module.exports = new CountryController();