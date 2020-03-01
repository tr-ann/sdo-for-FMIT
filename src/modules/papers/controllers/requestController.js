const RequestService = require('../services/RequestService');
const { responseFormat } = require('../../../helpers');

class RequestController {

  async create(req, res, next) {
      
    let request = await RequestService.create({
      studentId: req.body.studentId,
      teacherId: req.body.teacherId,
      statusId: req.body.statusId,
      topic: req.body.topic,
      name: req.body.name,
      description: req.body.description,
    });
    
    res
      .status(201)
      .json(
        responseFormat.build(
          request,
          "Request created successfully",
          201,
          "success"
        )
      );
  }

  async readAll(req, res, next) {
      
    let requests = await RequestService.readAll();
    
    res
      .status(200)
      .json(
        responseFormat.build(
          requests,
          "Requests read successfully",
          200,
          "success"
        )
      );
  }

  async readById(req, res, next) {
      
    let request = await RequestService.readById(req.params.id);

    res
      .status(200)
      .json(
        responseFormat.build(
          request,
          "Request read successfully",
          200,
          "success"
        )
      );
  }

  async update(req, res, next) {
      
    let request = await RequestService.update(
      req.params.id,
      {
        studentId: req.body.studentId,
        teacherId: req.body.teacherId,
        statusId: req.body.statusId,
        topic: req.body.topic,
        name: req.body.name,
        description: req.body.description,
        updateDate: req.body.updateDate,
      }
    );

    res
      .status(200)
      .json(
        responseFormat.build(
          request,
          "Request updated successfully",
          200,
          "success"
        )
      );
  }

  async destroy(req, res, next) {
    
    await RequestService.destroy(req.params.id);

    res
      .status(200)
      .json(
        responseFormat.build(
          {},
          "Request deleted successfully",
          200,
          "success"
        )
      );
  }
}

module.exports = new RequestController();