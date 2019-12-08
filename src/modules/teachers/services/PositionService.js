import PositionRepository from '../repositories/PositionRepository'
import NotFound from '../../../classes/errors/4xx/notFound'

class PositionService {

    async list() {
        return await PositionRepository.readAll()
    }

    async create(position) {
        return await PositionRepository.create(position)
    }

    /*  ????  */
    async findById(id) {
        let position = await PositionRepository.readById(id)
        if (!position) {
            throw new NotFound(`${objectName} not found`)
        }
        return position
    }

    async update(id, position) {
        let nPosition = PositionRepository.readById(id)
        if(!nPosition) {            
            throw new NotFound(`${objectName} not found`)
        }
        return await PositionRepository.update(id, position)
    }

    async destroy(id) {
        return await PositionRepository.destroy(id)
    }
}

export default new PositionService()