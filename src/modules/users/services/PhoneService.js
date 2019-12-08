import PhoneRepository from '../repositories/PhoneRepository'
import NotFound from '../../../classes/errors/4xx/notFound'

class PhoneService {

    /*  ????  */
    async list() {
        return await PhoneRepository.readAll()
    }

    async create(phone) {
        return await PhoneRepository.create(phone)
    }

    /*  ????  */
    async findById(id) {
        let phone = await PhoneRepository.readById(id)
        if (!phone) {
            throw new NotFound(`${objectName} not found`)
        }
        return phone
    }

    async update(id, phone) {
        let nPhone = PhoneRepository.readById(id)
        if(!nPhone) {
            throw new NotFound(`${objectName} not found`)
        }
        return await PhoneRepository.update(id, phone)
    }

    async destroy(id) {
        await PhoneRepository.destroy(id)
    }
}

export default new PhoneService()