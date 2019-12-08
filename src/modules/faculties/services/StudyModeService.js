import StudyModeRepository from '../repositories/StudyModeRepository';
import NotFound from '../../../classes/errors/4xx/notFound'

class StudyModeService {

    async create(studyMode) {
        return await StudyModeRepository.create(studyMode)
    }

    async readAll() {
        return await StudyModeRepository.readAll()
    }

    async readById(id) {

        let studyMode = await StudyModeRepository.readById(id)

        if (!studyMode) {
            throw new NotFound(`StudyMode not found`)
        }

        return studyMode
    }

    async update(id, studyMode) {

        let nStudyMode = await StudyModeRepository.readById(id)
        
        if (!nStudyMode) {
            throw new NotFound(`StudyMode not found`)
        }

        return await StudyModeRepository.update(id, studyMode)
    }

    async destroy(id) {

        let studyMode = await StudyModeRepository.readById(id)
        
        if (!studyMode) {
            throw new NotFound(`StudyMode not found`)
        }
        
        return await StudyModeRepository.destroy(id)
    }
}

export default new StudyModeService()