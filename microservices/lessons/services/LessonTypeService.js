import LessonTypeRepository from '../repositories/LessonTypeRepository';
import NotFound from '../../../core/errors/4xx/notFound'

export default class LessonTypeService {

    _lessonTypeRepository = new LessonTypeRepository()

    async create(lessonType) {
        return await this._lessonTypeRepository.create(lessonType)
    }

    async readAll() {
        return await this._lessonTypeRepository.readAll()
    }

    async readById(id) {

        let lessonType = await this._lessonTypeRepository.readById(id)

        if (!lessonType) {
            throw new NotFound('Lesson type not found')
        }

        return lessonType
    }

    async update(id, lessonType) {

        let lessonType = await this._lessonTypeRepository.readById(id)
        
        if (!lessonType) {
            throw new NotFound('Lesson type not found')
        }

        return await this._lessonTypeRepository.update(lessonType)
    }

    async destroy(id) {

        let lessonType = await this._lessonTypeRepository.readById(id)
        
        if (!lessonType) {
            throw new NotFound('Lesson type not found')
        }
        
        return await this._lessonTypeRepository.destroy(id)
    }
}