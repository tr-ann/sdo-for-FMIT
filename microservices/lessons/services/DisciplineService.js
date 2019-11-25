import DisciplineRepository from '../repositories/DisciplineRepository';
import NotFound from '../../../core/errors/4xx/notFound'

export default class DisciplineService {

    _repository = new DisciplineRepository()

    async create(discipline) {
        return await this._repository.create(discipline)
    }

    async readAll() {
        return await this._repository.readAll()
    }

    async readById(id) {

        let discipline = await this._repository.readById(id)

        if (!discipline) {
            throw new NotFound(`Discipline not found`)
        }

        return discipline
    }

    async update(id, discipline) {

        let discipline = await this._repository.readById(id)
        
        if (!discipline) {
            throw new NotFound(`Discipline not found`)
        }

        return await this._repository.update(discipline)
    }

    async destroy(id) {

        let discipline = await this._repository.readById(id)
        
        if (!discipline) {
            throw new NotFound(`Discipline not found`)
        }
        
        return await this._repository.destroy(id)
    }
}