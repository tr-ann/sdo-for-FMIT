const LessonRepository = require('../repositories/LessonRepository');
const { NotFound } = require('../../../classes/errors');

class LessonService {

  async create(lesson) {
    return await LessonRepository.create(lesson);
  }

  async readAll() {
    return await LessonRepository.readAll();
  }

  async readById(id) {

    let lesson = await LessonRepository.readById(id);

    if (!lesson) {
      throw new NotFound('Lesson not found');
    }

    return lesson;
  }

  async update(id, lesson) {

    let oldLesson = await LessonRepository.readById(id);
    
    if (!oldLesson) {
      throw new NotFound('Lesson not found');
    }

    return await LessonRepository.update(id, lesson);
  }

  async destroy(id) {

    let lesson = await LessonRepository.readById(id);
    
    if (!lesson) {
      throw new NotFound('Lesson not found');
    }
    
    return await LessonRepository.destroy(id);
  }
}

module.exports = new LessonService();