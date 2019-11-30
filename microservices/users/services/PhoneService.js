import PhoneRepository from '../repositories/PhoneRepository'

export default class PhoneService {

    _repository = new PhoneRepository()

    /*  ????  */
    async list() {
        return await this._repository.readAll()
    }

    async create(phone) {
        return await this._repository.create(phone)
    }

    /*  ????  */
    async findById(id) {
        let phone = await this._repository.readById(id)
        if (!phone) {
            throw new NotFound(`${objectName} not found`)
        }
        return phone
    }

    async update(id, phone) {
        return await this._repository.update(id, phone)
    }

    async destroy(id) {
        await this._repository.destroy(id)
    }
};