import db from '../../../config/dbModels'

class UrlRepository {

    async create(url) {
        return await db.url.create(url)
    }

    async readAll() {
        return await db.url.findAll()
    }

    async readById(id) {
        return await db.url.findByPk(id)
    }

    async update(id, url) {
        return await db.url.update(url, {where: {id: id}})
    }

    async destroy(id) {
        return await db.url.destroy({where: {id: id}})
    }
}

export default new UrlRepository()