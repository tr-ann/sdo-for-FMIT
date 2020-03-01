const TermPaperService = require('../services/TermPaperService');
const { responseFormat } = require('../../../helpers');

class TermPaperController {

  async create(req, res, next) {
      
    let termPaper = await TermPaperService.create({
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
          termPaper,
          "Term paper created successfully",
          201,
          "success"
        )
      );
  }

  async readAll(req, res, next) {
      
    let termPapers = await TermPaperService.readAll();
    
    res
      .status(200)
      .json(
        responseFormat.build(
          termPapers,
          "Term papers read successfully",
          200,
          "success"
        )
      );
  }

  async readById(req, res, next) {
      
    let termPaper = await TermPaperService.readById(req.params.id);

    res
      .status(200)
      .json(
        responseFormat.build(
          termPaper,
          "Term paper read successfully",
          200,
          "success"
        )
      );
  }

  async update(req, res, next) {
      
    let termPaper = await TermPaperService.update(
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
          termPaper,
          "Term paper updated successfully",
          200,
          "success"
        )
      );
  }

  async destroy(req, res, next) {
      
    await TermPaperService.destroy(req.params.id);

    res
      .status(200)
      .json(
        responseFormat.build(
          {},
          "Term paper deleted successfully",
          200,
          "success"
        )
      );
  }
}

module.exports = new TermPaperController()