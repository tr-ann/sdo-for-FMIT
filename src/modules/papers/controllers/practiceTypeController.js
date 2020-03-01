const PracticeTypeService = require('../services/PracticeTypeService');
const { responseFormat } = require('../../../helpers');

class PracticeTypeController {

  async create(req, res, next) {
      
    let practiceType = await PracticeTypeService.create({
      name: req.body.name,
    });
    
    res
      .status(201)
      .json(
        responseFormat.build(
          practiceType,
          "Practice type created successfully",
          201,
          "success"
        )
      );
  }

  async readAll(req, res, next) {
      
    let practiceTypes = await PracticeTypeService.readAll();
    
    res
      .status(200)
      .json(
        responseFormat.build(
          practiceTypes,
          "Practice types read successfully",
          200,
          "success"
        )
      );
  }

  async readById(req, res, next) {
      
    let practiceType = await PracticeTypeService.readById(req.params.id);

    res
      .status(200)
      .json(
        responseFormat.build(
          practiceType,
          "Practice type read successfully",
          200,
          "success"
        )
      );
  }

  async update(req, res, next) {
      
    let practiceType = await PracticeTypeService.update(
      req.params.id,
      {
        name: req.body.name,
      }
    );

    res.status(200).json(responseFormat.build(
        practiceType,
        "Practice type updated successfully",
        200,
        "success"
    ));
  }

  async destroy(req, res, next) {
      
    await PracticeTypeService.destroy(req.params.id);

    res
      .status(200)
      .json(
        responseFormat.build(
          {},
          "Practice type deleted successfully",
          200,
          "success"
        )
      );
  }
}

module.exports = new PracticeTypeController();