const PracticeService = require('../services/PracticeService');
const { responseFormat } = require('../../../helpers');

class PracticeController {

  async create(req, res, next) {
      
    let practice = await PracticeService.create({
      studentId: req.body.studentId,
      organizationId: req.body.organizationId,
      statusId: req.body.statusId,
      topic: req.body.topic,
      name: req.body.name,
      description: req.body.description,
      startDate: req.body.startDate,
      endDate: req.body.endDate,
      resourceId: req.body.resourceId,
      practiceTypeId: req.body.practiceTypeId,
    });
    
    res
      .status(201)
      .json(
        responseFormat.build(
          practice,
          "Practice created successfully",
          201,
          "success"
        )
      );
  }

  async readAll(req, res, next) {
      
    let practices = await PracticeService.readAll();
    
    res
      .status(200)
      .json(
        responseFormat.build(
          practices,
          "Practices read successfully",
          200,
          "success"
        )
      );
  }

  async readById(req, res, next) {
      
    let practice = await PracticeService.readById(req.params.id);

    res
      .status(200)
      .json(
        responseFormat.build(
          practice,
          "Practice read successfully",
          200,
          "success"
        )
      );
  }

  async update(req, res, next) {
      
    let practice = await PracticeService.update(
      req.params.id,
      {
        studentId: req.body.studentId,
        organizationId: req.body.organizationId,
        statusId: req.body.statusId,
        topic: req.body.topic,
        name: req.body.name,
        description: req.body.description,
        startDate: req.body.startDate,
        endDate: req.body.endDate,
        resourceId: req.body.resourceId,
        practiceTypeId: req.body.practiceTypeId,
      }
    );

    res
      .status(200)
      .json(
        responseFormat.build(
          practice,
          "Practice updated successfully",
          200,
          "success"
        )
      );
  }

  async destroy(req, res, next) {
      
    await PracticeService.destroy(req.params.id);

    res
      .status(200)
      .json(
        responseFormat.build(
          {},
          "Practice deleted successfully",
          200,
          "success"
        )
      );
  }
}

module.exports = new PracticeController();