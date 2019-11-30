import db from '../models'

export default class UserInfoRepository {

    /*  ????  */
    async create(userInfo) {
        return await db.user_info.create(userInfo)
    }

    /*  ????  */
    async readAll() {
        return await db.user_info.findAll()
    }

    async readById(id) {
        return await db.user_info.findByPk(id)
    }

    async update(id, userInfo) {
        return await db.user_info.update(userInfo, {where: {id: id}})
    }

    async destroy(user_id) {
        return await db.user_info.destroy({where: {user_id: user_id}})
    }
}