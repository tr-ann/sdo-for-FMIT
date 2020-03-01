const OrganizationService = require('../services/OrganizationService');
const { responseFormat } = require('../../../helpers');

class OrganizationController {

  async create(req, res, next) {
     
    let organization = await OrganizationService.create({
      name: req.body.name,
    });
    
    res
      .status(201)
      .json(
        responseFormat.build(
          organization,
          "Organization created successfully",
          201,
          "success"
        )
      );
  }

  async readAll(req, res, next) {
      
    let organizations = await OrganizationService.readAll();
    
    res
      .status(200)
      .json(
        responseFormat.build(
          organizations,
          "Organizations read successfully",
          200,
          "success"
        )
      );
  }

  async readById(req, res, next) {
      
    let organization = await OrganizationService.readById(req.params.id);

    res
      .status(200)
      .json(
        responseFormat.build(
          organization,
          "Organization read successfully",
          200,
          "success"
        )
      );
  }

  async update(req, res, next) {
      
    let organization = await OrganizationService.update(
      req.params.id,
      {
        name: req.body.name,
      }
    );

    res
      .status(200)
      .json(
        responseFormat.build(
          organization,
          "Organization updated successfully",
          200,
          "success"
        )
      );
  }

  async destroy(req, res, next) {
      
    await OrganizationService.destroy(req.params.id);

    res
      .status(200)
      .json(
        responseFormat.build(
          {},
          "Organization deleted successfully",
          200,
          "success"
        )
      );
  }
}

module.exports = new OrganizationController();