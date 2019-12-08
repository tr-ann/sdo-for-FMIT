import LessonNumberRepository from '../repositories/LessonNumberRepository';
import NotFound from '../../../classes/errors/4xx/notFound'

class LessonNumberService {

    async create(lessonNumber) {
        return await LessonNumberRepository.create(lessonNumber)
    }

    async readAll() {
        return await LessonNumberRepository.readAll()
    }

    async readById(id) {

        let lessonNumber = await LessonNumberRepository.readById(id)

        if (!lessonNumber) {
            throw new NotFound('Lesson number not found')
        }

        return lessonNumber
    }

    async update(id, lessonNumber) {

        let oldLessonNumber = await LessonNumberRepository.readById(id)
        
        if (!oldLessonNumber) {
            throw new NotFound('Lesson number not found')
        }

        return await LessonNumberRepository.update(id, lessonNumber)
    }

    async destroy(id) {

        let lessonNumber = await LessonNumberRepository.readById(id)
        
        if (!lessonNumber) {
            throw new NotFound('Lesson number not found')
        }
        
        return await LessonNumberRepository.destroy(id)
    }
}

export default new LessonNumberService()