const RoomTypeService = require('../services/RoomTypeService');
const { responseFormat } = require('../../../helpers');

class RoomTypeController {

  async create(req, res, next) {
      
    let roomType = await RoomTypeService.create({
      name: req.body.name,
    });
    
    res
      .status(201)
      .json(
        responseFormat.build(
          roomType,
          "Room type created successfully",
          201,
          "success"
        )
      );
  }

  async readAll(req, res, next) {
    
    let roomTypes = await RoomTypeService.readAll();
    
    res
      .status(200)
      .json(
        responseFormat.build(
          roomTypes,
          "Room types read successfully",
          200,
          "success"
        )
      );
  }

  async readById(req, res, next) {
      
    let roomType = await RoomTypeService.readById(req.params.id);

    res
      .status(200)
      .json(
        responseFormat.build(
          roomType,
          "Room type read successfully",
          200,
          "success"
        )
      );
  }

  async update(req, res, next) {
      
    let roomType = await RoomTypeService.update(
      req.params.id,
      {
        name: req.body.name,
      }
    );

    res
      .status(200)
      .json(
        responseFormat.build(
          roomType,
          "Room type updated successfully",
          200,
          "success"
        )
      );
  }

  async destroy(req, res, next) {
      
    await RoomTypeService.destroy(req.params.id);

    res
      .status(200)
      .json(
        responseFormat.build(
          {},
          "Room type deleted successfully",
          200,
          "success"
        )
      );
  }
}

module.exports = new RoomTypeController();