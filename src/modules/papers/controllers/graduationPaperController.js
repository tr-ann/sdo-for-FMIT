const GraduationPaperService = require('../services/GraduationPaperService');
const { responseFormat } = require('../../../helpers');

class GraduationPaperController {

  async create(req, res, next) {
      
    let graduationPaper = await GraduationPaperService.create({
      studentId: req.body.studentId,
      teacherId: req.body.teacherId,
      statusId: req.body.statusId,
      topic: req.body.topic,
      name: req.body.name,
      description: req.body.description,
      resourceId: req.body.resourceId,
    });
    
    res
      .status(201)
      .json(
        responseFormat.build(
          graduationPaper,
          "Graduation paper created successfully",
          201,
          "success"
        )
      );
  }

  async readAll(req, res, next) {
    
    let graduationPapers = await GraduationPaperService.readAll();
    
    res
      .status(200)
      .json(
        responseFormat.build(
          graduationPapers,
          "Graduation papers read successfully",
          200,
          "success"
        )
      );
  }

  async readById(req, res, next) {
    
    let graduationPaper = await GraduationPaperService.readById(req.params.id);

    res
      .status(200)
      .json(
        responseFormat.build(
          graduationPaper,
          "Graduation paper read successfully",
          200,
          "success"
        )
      );
  }

  async update(req, res, next) {
      
    let graduationPaper = await GraduationPaperService.update(
      req.params.id,
      {
        studentId: req.body.studentId,
        teacherId: req.body.teacherId,
        statusId: req.body.statusId,
        topic: req.body.topic,
        name: req.body.name,
        description: req.body.description,
        resourceId: req.body.resourceId,
      }
    );

    res
      .status(200)
      .json(
        responseFormat.build(
          graduationPaper,
          "Graduation paper updated successfully",
          200,
          "success"
        )
      );
  }

  async destroy(req, res, next) {
      
    await GraduationPaperService.destroy(req.params.id);

    res
      .status(200)
      .json(
        responseFormat.build(
          {},
          "Graduation paper deleted successfully",
          200,
          "success"
        )
      );
  }
}

module.exports = new GraduationPaperController();