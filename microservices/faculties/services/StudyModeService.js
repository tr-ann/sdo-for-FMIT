import StudyModeRepository from '../repositories/StudyModeRepository';
import NotFound from '../../../core/errors/4xx/notFound'

class StudyModeService {

    _repository = new StudyModeRepository()

    async create(studyMode) {
        return await this._repository.create(studyMode)
    }

    async readAll() {
        return await this._repository.readAll()
    }

    async readById(id) {

        let studyMode = await this._repository.readById(id)

        if (!studyMode) {
            throw new NotFound(`StudyMode not found`)
        }

        return studyMode
    }

    async update(id, studyMode) {

        let studyMode = await this._repository.readById(id)
        
        if (!studyMode) {
            throw new NotFound(`StudyMode not found`)
        }

        return await this._repository.update(studyMode)
    }

    async destroy(id) {

        let studyMode = await this._repository.readById(id)
        
        if (!studyMode) {
            throw new NotFound(`StudyMode not found`)
        }
        
        return await this._repository.destroy(id)
    }
}

export default new StudyModeService()