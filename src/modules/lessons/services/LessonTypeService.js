import LessonTypeRepository from '../repositories/LessonTypeRepository';
import NotFound from '../../../classes/errors/4xx/notFound'

class LessonTypeService {

    async create(lessonType) {
        return await LessonTypeRepository.create(lessonType)
    }

    async readAll() {
        return await LessonTypeRepository.readAll()
    }

    async readById(id) {

        let lessonType = await LessonTypeRepository.readById(id)

        if (!lessonType) {
            throw new NotFound('Lesson type not found')
        }

        return lessonType
    }

    async update(id, lessonType) {

        let oldLessonType = await LessonTypeRepository.readById(id)
        
        if (!oldLessonType) {
            throw new NotFound('Lesson type not found')
        }

        return await LessonTypeRepository.update(id, lessonType)
    }

    async destroy(id) {

        let lessonType = await LessonTypeRepository.readById(id)
        
        if (!lessonType) {
            throw new NotFound('Lesson type not found')
        }
        
        return await LessonTypeRepository.destroy(id)
    }
}

export default new LessonTypeService()