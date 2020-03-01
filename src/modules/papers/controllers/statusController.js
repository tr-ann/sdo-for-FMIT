const StatusService = require('../services/StatusService');
const { responseFormat } = require('../../../helpers');

class StatusController {

  async create(req, res, next) {
      
    let status = await StatusService.create({
      name: req.body.name,
    });
    
    res
      .status(201)
      .json(
        responseFormat.build(
          status,
          "Status created successfully",
          201,
          "success"
        )
      );
  }

  async readAll(req, res, next) {
      
    let statuses = await StatusService.readAll();
    
    res
      .status(200)
      .json(
        responseFormat.build(
          statuses,
          "Statuses read successfully",
          200,
          "success"
        )
      );
  }

  async readById(req, res, next) {
      
    let status = await StatusService.readById(req.params.id);

    res
      .status(200)
      .json(
        responseFormat.build(
          status,
          "Status read successfully",
          200,
          "success"
        )
      );
  }

  async update(req, res, next) {
      
    let status = await StatusService.update(
      req.params.id,
      {
        name: req.body.name,
      }
    );

    res
      .status(200)
      .json(
        responseFormat.build(
          status,
          "Status updated successfully",
          200,
          "success"
        )
      );
  }

  async destroy(req, res, next) {
      
    await StatusService.destroy(req.params.id);

    res
      .status(200)
      .json(
        responseFormat.build(
          {},
          "Status deleted successfully",
          200,
          "success"
        )
      );
  }
}

module.exports = new StatusController();