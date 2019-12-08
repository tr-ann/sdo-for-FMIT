import InfoFacultyRepository from '../repositories/InfoFacultyRepository';
import NotFound from '../../../classes/errors/4xx/notFound'

class InfoFacultyService {

    async create(infoFaculty) {
        return await this._repository.create(infoFaculty)
    }

    async readAll() {
        return await this._repository.readAll()
    }

    async readById(id) {

        let infoFaculty = await this._repository.readById(id)

        if (!infoFaculty) {
            throw new NotFound(`InfoFaculty not found`)
        }

        return infoFaculty
    }

    async update(id, infoFaculty) {

        let nInfoFaculty = await this._repository.readById(id)
        
        if (!nInfoFaculty) {
            throw new NotFound(`InfoFaculty not found`)
        }

        return await this._repository.update(infoInfoFaculty)
    }

    async destroy(id) {

        let infoFaculty = await this._repository.readById(id)
        
        if (!infoFaculty) {
            throw new NotFound(`InfoFaculty not found`)
        }
        
        return await this._repository.destroy(id)
    }
}

export default new InfoFacultyService()