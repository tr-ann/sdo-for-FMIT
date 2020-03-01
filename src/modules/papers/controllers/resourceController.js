const ResourceService = require('../services/ResourceService');
const { responseFormat } = require('../../../helpers');

class ResourceController {

  async create(req, res, next) {
      
    let resource = await ResourceService.create({
      description: req.body.description,
    });
    
    res
      .status(201)
      .json(
        responseFormat.build(
          resource,
          "Resource created successfully",
          201,
          "success"
        )
      );
  }

  async readAll(req, res, next) {
      
    let resources = await ResourceService.readAll();
    
    res
      .status(200)
      .json(
        responseFormat.build(
          resources,
          "Resources read successfully",
          200,
          "success"
        )
      );
  }

  async readById(req, res, next) {
      
    let resource = await ResourceService.readById(req.params.id);

    res
      .status(200)
      .json(
        responseFormat.build(
          resource,
          "Resource read successfully",
          200,
          "success"
        )
      );
  }

  async update(req, res, next) {
      
    let resource = await ResourceService.update(
      req.params.id,
      {
        description: req.body.description,
      }
    );

    res
      .status(200)
      .json(
        responseFormat.build(
          resource,
          "Resource updated successfully",
          200,
          "success"
        )
      );
  }

  async destroy(req, res, next) {
      
    await ResourceService.destroy(req.params.id);

    res
      .status(200)
      .json(
        responseFormat.build(
          {},
          "Resource deleted successfully",
          200,
          "success"
        )
      );
  }
}

module.exports = new ResourceController();