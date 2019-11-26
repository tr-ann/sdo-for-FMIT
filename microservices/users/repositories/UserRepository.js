import db from '../models'

export default class User {
    
    async readAll() {
        return await db.user.findAll()
    }

    async readById(id) {
        return await db.user.findByPk(id)
    }

    async create(object) {
        return await db.user.create(object)
    }

    async update(object) {
        let oldUser = await db.user.findByPk(object.id)
        if (!oldUser) {
            throw new NotFound(`${objectName} not found`)
        }
        return await oldUser.update(object)
    }
    
 //как лучше метод назвать destroy / delete
    async delete(user) {
        await user.destroy()
    }
}