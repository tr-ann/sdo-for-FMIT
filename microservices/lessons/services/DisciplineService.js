import DisciplineRepository from '../repositories/DisciplineRepository';
import NotFound from '../../../core/errors/4xx/notFound'

export default class DisciplineService {

    _disciplineRepository = new DisciplineRepository()

    async create(discipline) {
        return await this._disciplineRepository.create(discipline)
    }

    async readAll() {
        return await this._disciplineRepository.readAll()
    }

    async readById(id) {

        let discipline = await this._disciplineRepository.readById(id)

        if (!discipline) {
            throw new NotFound('Discipline not found')
        }

        return discipline
    }

    async update(id, discipline) {

        let discipline = await this._disciplineRepository.readById(id)
        
        if (!discipline) {
            throw new NotFound('Discipline not found')
        }

        return await this._disciplineRepository.update(discipline)
    }

    async destroy(id) {

        let discipline = await this._disciplineRepository.readById(id)
        
        if (!discipline) {
            throw new NotFound('Discipline not found')
        }
        
        return await this._disciplineRepository.destroy(id)
    }
}