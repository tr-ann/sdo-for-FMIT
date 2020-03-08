const LessonTypeRepository = require('../repositories/LessonTypeRepository');
const { NotFound } = require('../../../classes/errors');

class LessonTypeService {

  async create(lessonType) {
    return await LessonTypeRepository.create(lessonType);
  }

  async readAll() {
    return await LessonTypeRepository.readAll();
  }

  async readById(id) {

    let lessonType = await LessonTypeRepository.readById(id);

    if (!lessonType) {
      throw new NotFound('Lesson type not found');
    }

    return lessonType;
  }

  async update(id, lessonType) {

    let oldLessonType = await LessonTypeRepository.readById(id);
    
    if (!oldLessonType) {
      throw new NotFound('Lesson type not found');
    }

    return await LessonTypeRepository.update(id, lessonType);
  }

  async destroy(id) {

    let lessonType = await LessonTypeRepository.readById(id);
    
    if (!lessonType) {
      throw new NotFound('Lesson type not found');
    }
    
    return await LessonTypeRepository.destroy(id);
  }
}

module.exports = new LessonTypeService();