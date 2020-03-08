const LessonService = require('../services/LessonService');
const { responseFormat } = require('../../../helpers');

class LessonController {

  async create(req, res, next) {
    
    let lesson = await LessonService.create({
      groupId: req.body.groupId,
      subgroupId: req.body.subgroupId,
      teacherId: req.body.teacherId,
      lessonTypeId: req.body.lessonTypeId,
      lectureRoomId: req.body.lectureRoomId,
      disciplineId: req.body.disciplineId,
      lessonNumberId: req.body.lessonNumberId,
      weekDay: req.body.weekDay,
    });
    
    res
      .status(201)
      .json(
        responseFormat.build(
          lesson,
          "Lesson created successfully",
          201,
          "success"
        )
      );
  }

  async readAll(req, res, next) {
      
    let lessons = await LessonService.readAll();
          
    res
      .status(200)
      .json(
        responseFormat.build(
          lessons,
          "Lessons read successfully",
          200,
          "success"
        )
      );
  }

  async readById(req, res, next) {
      
    let lesson = await LessonService.readById(req.params.id);

    res
      .status(200)
      .json(
        responseFormat.build(
          lesson,
          "Lesson read successfully",
          200,
          "success"
        )
      );
  }

  async update(req, res, next) {
      
    let lesson = await LessonService.update(
      req.params.id,
      {
        groupId: req.body.groupId,
        subgroupId: req.body.subgroupId,
        teacherId: req.body.teacherId,
        lessonTypeId: req.body.lessonTypeId,
        lectureRoomId: req.body.lectureRoomId,
        disciplineId: req.body.disciplineId,
        lessonNumberId: req.body.lessonNumberId,
        weekDay: req.body.weekDay,
      }
    );

    res
      .status(200)
      .json(
        responseFormat.build(
          lesson,
          "Lesson updated successfully",
          200,
          "success"
        )
      );
  }

  async destroy(req, res, next) {
      
    await LessonService.destroy(req.params.id);

    res
      .status(200)
      .json(
        responseFormat.build(
          {},
          "Lesson deleted successfully",
          200,
          "success"
        )
      );
  }
}

module.exports = new LessonController();