import db from '../models'

export default class PhoneRepository {

    async create(phone) {
        return await db.phone.create(phone)
    }

    async readAll() {
        return await db.phone.findAll()
    }

    async readById(id) {
        return await db.phone.findByPk(id)
    }

    async update(id, phone) {
        return await db.phone.update(phone, {where: {id: id}})
    }

    async destroy(id) {
        return await db.phone.destroy({where: {id: id}})
    }
}