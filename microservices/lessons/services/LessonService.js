import LessonRepository from '../repositories/LessonRepository';
import NotFound from '../../../core/errors/4xx/notFound'

export default class LessonService {

    _lessonRepository = new LessonRepository()

    async create(lesson) {
        return await this._lessonRepository.create(lesson)
    }

    async readAll() {
        return await this._lessonRepository.readAll()
    }

    async readById(id) {

        let lesson = await this._lessonRepository.readById(id)

        if (!lesson) {
            throw new NotFound('Lesson not found')
        }

        return lesson
    }

    async update(id, lesson) {

        let lesson = await this._lessonRepository.readById(id)
        
        if (!lesson) {
            throw new NotFound('Lesson not found')
        }

        return await this._lessonRepository.update(lesson)
    }

    async destroy(id) {

        let lesson = await this._lessonRepository.readById(id)
        
        if (!lesson) {
            throw new NotFound('Lesson not found')
        }
        
        return await this._lessonRepository.destroy(id)
    }
}