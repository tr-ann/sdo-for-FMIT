const BuildingService = require('../services/BuildingService');
const { responseFormat } = require('../../../helpers');

class BuildingController {

  async create(req, res, next) {
    
    let building = await BuildingService.create({
      name: req.body.name,
      address: req.body.address,
    });
    
    res
      .status(201)
      .json(
        responseFormat.build(
          building,
          "Building created successfully",
          201,
          "success"
        )
      );
  }

  async readAll(req, res, next) {
      
    let buildings = await BuildingService.readAll();
    
    res
      .status(200)
      .json(
        responseFormat.build(
          buildings,
          "Buildings read successfully",
          200,
          "success"
        )
      );
  }

  async readById(req, res, next) {
      
    let building = await BuildingService.readById(req.params.id);

    res
      .status(200)
      .json(
        responseFormat.build(
          building,
          "Building read successfully",
          200,
          "success"
        )
      );
  }

  async update(req, res, next) {
      
    let building = await BuildingService.update(
      req.params.id,
      {
        name: req.body.name,
        address: req.body.address,
      }
    );

    res
      .status(200)
      .json(
        responseFormat.build(
          building,
          "Building updated successfully",
          200,
          "success"
        )
      );
  }

  async destroy(req, res, next) {
      
    await BuildingService.destroy(req.params.id);

    res
      .status(200)
      .json(
        responseFormat.build(
          {},
          "Building deleted successfully",
          200,
          "success"
        )
      );
  }
}

module.exports = new BuildingController();