const LessonTypeService = require('../services/LessonTypeService');
const { responseFormat } = require('../../../helpers');

class LessonTypeController {

  async create(req, res, next) {
      
    let lessonType = await LessonTypeService.create({
      name: req.body.name,
    });
    
    res
      .status(201)
      .json(
        responseFormat.build(
          lessonType,
          "Lesson type created successfully",
          201,
          "success"
        )
      );
  }

  async readAll(req, res, next) {
      
    let lessonTypes = await LessonTypeService.readAll();
    
    res
      .status(200)
      .json(
        responseFormat.build(
          lessonTypes,
          "Lesson types read successfully",
          200,
          "success"
        )
      );
  }

  async readById(req, res, next) {
    
    let lessonType = await LessonTypeService.readById(req.params.id);

    res
      .status(200)
      .json(
        responseFormat.build(
          lessonType,
          "Lesson type read successfully",
          200,
          "success"
        )
      );
  }

  async update(req, res, next) {
      
    let lessonType = await LessonTypeService.update(
      req.params.id,
      {
        name: req.body.name,
      }
    );

    res
      .status(200)
      .json(
        responseFormat.build(
          lessonType,
          "Lesson type updated successfully",
          200,
          "success"
        )
      );
  }

  async destroy(req, res, next) {
      
    await LessonTypeService.destroy(req.params.id);

    res
      .status(200)
      .json(
        responseFormat.build(
          {},
          "Lesson type deleted successfully",
          200,
          "success"
        )
      );
  }
}

module.exports = new LessonTypeController();