import LessonNumberRepository from '../repositories/LessonNumberRepository';
import NotFound from '../../../core/errors/4xx/notFound'

export default class LessonNumberService {

    _lessonNumberRepository = new LessonNumberRepository()

    async create(lessonNumber) {
        return await this._lessonNumberRepository.create(lessonNumber)
    }

    async readAll() {
        return await this._lessonNumberRepository.readAll()
    }

    async readById(id) {

        let lessonNumber = await this._lessonNumberRepository.readById(id)

        if (!lessonNumber) {
            throw new NotFound('Lesson number not found')
        }

        return lessonNumber
    }

    async update(id, lessonNumber) {

        let lessonNumber = await this._lessonNumberRepository.readById(id)
        
        if (!lessonNumber) {
            throw new NotFound('Lesson number not found')
        }

        return await this._lessonNumberRepository.update(lessonNumber)
    }

    async destroy(id) {

        let lessonNumber = await this._lessonNumberRepository.readById(id)
        
        if (!lessonNumber) {
            throw new NotFound('Lesson number not found')
        }
        
        return await this._lessonNumberRepository.destroy(id)
    }
}