import InfoFacultyRepository from '../repositories/InfoFacultyRepository';
import NotFound from '../../../core/errors/4xx/notFound'

class InfoFacultyService {

    _repository = new InfoFacultyRepository()

    async create(infoInfoFaculty) {
        return await this._repository.create(infoInfoFaculty)
    }

    async readAll() {
        return await this._repository.readAll()
    }

    async readById(id) {

        let infoInfoFaculty = await this._repository.readById(id)

        if (!infoInfoFaculty) {
            throw new NotFound(`InfoFaculty not found`)
        }

        return infoInfoFaculty
    }

    async update(id, infoInfoFaculty) {

        let infoInfoFaculty = await this._repository.readById(id)
        
        if (!infoInfoFaculty) {
            throw new NotFound(`InfoFaculty not found`)
        }

        return await this._repository.update(infoInfoFaculty)
    }

    async destroy(id) {

        let infoInfoFaculty = await this._repository.readById(id)
        
        if (!infoInfoFaculty) {
            throw new NotFound(`InfoFaculty not found`)
        }
        
        return await this._repository.destroy(id)
    }
}

export default new InfoFacultyService()