const LessonNumberService = require('../services/LessonNumberService');
const { responseFormat } = require('../../../helpers');

class LessonNumberController {

  async create(req, res, next) {
      
    let lessonNumber = await LessonNumberService.create({
      number: req.body.number,
      startTime1: req.body.startTime1,
      endTime1: req.body.endTime1,
      startTime2: req.body.startTime2,
      endTime2: req.body.endTime2,
    });
    
    res
      .status(201)
      .json(
        responseFormat.build(
          lessonNumber,
          "Lesson number created successfully",
          201,
          "success"
        )
      );
  }

  async readAll(req, res, next) {
      
    let lessonNumbers = await LessonNumberService.readAll();
          
    res
      .status(200)
      .json(
        responseFormat.build(
          lessonNumbers,
          "Lesson numbers read successfully",
          200,
          "success"
        )
      );
  }

  async readById(req, res, next) {
      
    let lessonNumber = await LessonNumberService.readById(req.params.id);

    res
      .status(200)
      .json(
        responseFormat.build(
          lessonNumber,
          "Lesson number read successfully",
          200,
          "success"
        )
      );
  }

  async update(req, res, next) {
      
    let lessonNumber = await LessonNumberService.update(
      req.params.id,
      {
        number: req.body.number,
        startTime1: req.body.startTime1,
        endTime1: req.body.endTime1,
        startTime2: req.body.startTime2,
        endTime2: req.body.endTime2,
      }
    );

    res
      .status(200)
      .json(
        responseFormat.build(
          lessonNumber,
          "Lesson number updated successfully",
          200,
          "success"
        )
      );
  }

  async destroy(req, res, next) {
      
    await LessonNumberService.destroy(req.params.id);

    res
      .status(200)
      .json(
        responseFormat.build(
          {},
          "Lesson number deleted successfully",
          200,
          "success"
        )
      );
  }
}

module.exports = new LessonNumberController();