import db from '../../../config/dbModels'

class UserInfoRepository {

    /**
     * Create an entity in a database
     * 
     * @param {Object} userInfo - body of userInfo that will be created
     * @return {Promise} promise with result of create
     */
    async create(userInfo) {
        return await db.user_info.create(userInfo)
    }

    /**
     * Read an entity from a database
     * 
     * @param {Number} user_id - id of user whos info will be read
     * @return {Promise} promise with result of create
     */
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

    /**
     * Update an entity from a database
     * 
     * @param {Number} id - id of userInfo that will be updated
     * @param {Object} userInfo - body of userInfo that will be updated
     * @return {Promise} promise with result of update
     */
    async update(id, userInfo) {
        return await db.user_info.update(userInfo, {where: { id: id }})
    }

    /**
     * Destroy an entity from a database
     * 
     * @param {Number} id - id of userInfo that will be destroyed
     * @return {Promise} promise with result of destroy
     */
    async destroy(id) {
        return await db.user_info.destroy({where: { id: id }})
    }

    /**
     * Reads entities by description from a database
     * 
     * @param {Object} options - description to read entities
     * @return {Promise} promise with result of create
     */
    async get(options) {        
        return await db.user_info.findAll(options)
    }
}

export default new UserInfoRepository()