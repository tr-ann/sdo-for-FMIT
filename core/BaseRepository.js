export default class BaseRepository {

    constructor(baseModel) {
        this._baseModel = baseModel
    }

    /**
     * This is a standard method to create an entity from a database
     * 
     * @param {Object} object - body of object that will be created
     * @return {Promise} promise with result of create
     */
    async create(object) {
        return await this._baseModel.create(object)
    }

    /**
     * This is a standard method to read all the entities from a database
     * 
     * @return {Promise} promise with result of read
     */
    async readAll() {
        return await this._baseModel.findAll()
    }

    /**
     * This is a standard method to update an entity from a database
     * 
     * @param {Number} id - id of object that will be updated
     * @param {Object} object - body of object that will be updated
     * @return {Promise} promise with result of update
     */
    async update(id, object) {
        return await this._baseModel.update(object, {
            where: { id: id }
        })
    }

    /**
     * This is a standard method to destroy an entity from a database
     * 
     * @param {Number} id - id of object that will be destroyed
     * @return {Promise} promise with result of destroy
     */
    async destroy(id) {
        return await this._baseModel.destroy({
            where: { id: id }
        })
    }
}