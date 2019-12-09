import db from '../../../classes/dbModels'

class UrlRepository {

    /**
     * This is a standard method to create an entity in a database
     * 
     * @param {Object} url - body of url that will be created
     * @return {Promise} promise with result of create
     */
    async create(url) {
        return await db.url.create(url)
    }

    /**
     * This is a standard method to read all the entities from a database
     * 
     * @return {Promise} promise with result of read
     */
    async readAll() {
        return await db.url.findAll({
            attributes: [ 'id', 'url'], 
            include: [
                {
                    model: db.role,
                    attributes: [ 'id', 'name' ],
                    as: 'roles'
                }
            ]
        })
    }

    /**
     * This is a standard method to read an entity from a database
     * 
     * @param {Number} id - id of url that will be read
     * @return {Promise} promise with result of create
     */
    async readById(id) {
        return await db.url.findByPk(id, {
            attributes: [
                'id',
                'url',
            ], 
            include: [
                {
                    model: db.role,
                    attributes: [ 'id', 'name' ],
                    as: 'roles'
                }
            ]
        })
    }

    /**
     * This is a standard method to update an entity from a database
     * 
     * @param {Number} id - id of url that will be updated
     * @param {Object} url - body of url that will be updated
     * @return {Promise} promise with result of update
     */
    async update(id, url) {
        return await db.url.update(url, {where: {id: id}})
    }

     /**
     * This is a standard method to destroy an entity from a database
     * 
     * @param {Number} id - id of url that will be destroyed
     * @return {Promise} promise with result of destroy
     */
    async destroy(id) {
        return await db.url.destroy({where: {id: id}})
    }

    /**
     * This method reads entities by description from a database
     * 
     * @param {Object} options - description to read entities
     * @return {Promise} promise with result of create
     */
    async get(options) {        
        return await db.url.findAll(options)
    }
}

export default new UrlRepository()