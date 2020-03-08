const SpecialtyService = require('../services/SpecialtyService');
const { responseFormat } = require('../../../helpers');

class SpecialtyController {

  async create(req, res, next) {
      
    let specialty = await SpecialtyService.create({
      code: req.body.code,
      name: req.body.name,
      shortName: req.body.shortName,
    });
    
    res
      .status(201)
      .json(
        responseFormat.build(
          specialty,
          "Specialty created successfully",
          201,
          "success"
        )
      );
  }

  async readAll(req, res, next) {
      
    let specialtys = await SpecialtyService.readAll();
    
    res
      .status(200)
      .json(
        responseFormat.build(
          specialtys,
          "Specialtys read successfully",
          200,
          "success"
        )
      );
  }

  async readById(req, res, next) {
      
    let specialty = await SpecialtyService.readById(req.params.id);

    res
      .status(200)
      .json(
        responseFormat.build(
          specialty,
          "Specialty read successfully",
          200,
          "success"
        )
      );
  }

  async update(req, res, next) {
      
    let specialty = await SpecialtyService.update(
      req.params.id,
      {
        code: req.body.code,
        name: req.body.name,
        shortName: req.body.shortName,
      }
    );

    res
      .status(200)
      .json(
        responseFormat.build(
          specialty,
          "Specialty updated successfully",
          200,
          "success"
        )
      );
  }

  async destroy(req, res, next) {
      
    await SpecialtyService.destroy(req.params.id);

    res
      .status(200)
      .json(
        responseFormat.build(
          {},
          "Specialty deleted successfully",
          200,
          "success"
        )
      );
  }
}

module.exports = new SpecialtyController();