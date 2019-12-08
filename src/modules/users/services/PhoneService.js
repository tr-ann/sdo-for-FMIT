import PhoneRepository from '../repositories/PhoneRepository'
import NotFound from '../../../classes/errors/4xx/notFound'

class PhoneService {

    async create(phone) {
        return await PhoneRepository.create(phone)
    }

    async findById(id) {

        let phone = await PhoneRepository.readById(id)

        if (!phone) {
            throw new NotFound(`Phone not found`)
        }

        return phone
    }

    async update(id, phone) {

        let oldPhone = PhoneRepository.readById(id)

        if(!oldPhone) {
            throw new NotFound(`Phone not found`)
        }

        return await PhoneRepository.update(id, phone)
    }

    async destroy(id) {

        let oldPhone = PhoneRepository.readById(id)

        if(!oldPhone) {
            throw new NotFound(`Phone not found`)
        }

        await PhoneRepository.destroy(id)
    }
}

export default new PhoneService()