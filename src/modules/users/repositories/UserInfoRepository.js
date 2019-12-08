import db from '../../../config/dbModels'

class UserInfoRepository {

    async create(userInfo) {
        return await db.user_info.create(userInfo)
    }

    /*  ????  */
    async readAll() {
        return await db.user_info.findAll({
            attributes: [ 'id', 'full_name', 'email', 'sex', 'description', 'birthday', 'city', 'address' ],
            include: [
                {
                    model: db.resource,
                    attributes: [ 'id', 'description' ],
                },
            ]
        })
    }

    /* ????????? */
    async readById(user_id) {
        return await db.user_info.findOne({
            attributes: [ 'id', 'full_name', 'email', 'sex', 'description', 'birthday', 'city', 'address' ],
            include: [
                {
                    model: db.resource,
                    attributes: [ 'id', 'description' ],
                },
            ],

            where: { user_id: user_id }
        })
    }

    async update(id, userInfo) {
        return await db.user_info.update(userInfo, {where: {id: id}})
    }

    async destroy(user_id) {
        return await db.user_info.destroy({where: {user_id: user_id}})
    }
}

export default new UserInfoRepository()