import FacultyRepository from '../repositories/FacultyRepository';
import NotFound from '../../../core/errors/4xx/notFound'

class FacultyService {

    _repository = new FacultyRepository()

    async create(faculty) {
        return await this._repository.create(faculty)
    }

    async readAll() {
        return await this._repository.readAll()
    }

    async readById(id) {

        let faculty = await this._repository.readById(id)

        if (!faculty) {
            throw new NotFound(`Faculty not found`)
        }

        return faculty
    }

    async update(id, faculty) {

        let faculty = await this._repository.readById(id)
        
        if (!faculty) {
            throw new NotFound(`Faculty not found`)
        }

        return await this._repository.update(faculty)
    }

    async destroy(id) {

        let faculty = await this._repository.readById(id)
        
        if (!faculty) {
            throw new NotFound(`Faculty not found`)
        }
        
        return await this._repository.destroy(id)
    }
}

export default new FacultyService()