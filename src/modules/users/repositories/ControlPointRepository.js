import db from '../../../classes/dbModels'

class ControlPointRepository {

    /**
     * This is a standard method to create an entity in a database
     * 
     * @param {Object} controlPoint - body of controlPoint that will be created
     * @return {Promise} promise with result of create
     */
    async create(controlPoint) {
        return await db.control_point.create(controlPoint)
    }

    /**
     * This is a standard method to read all the entities from a database
     * 
     * @return {Promise} promise with result of read
     */
    async readAll() {
        return await db.control_point.findAll({
            attributes: [ 'id', 'url', 'method' ],
        })
    }

    /**
     * This is a standard method to read an entity from a database
     * 
     * @param {Number} id - id of controlPoint that will be read
     * @return {Promise} promise with result of create
     */
    async readById(id) {
        return await db.control_point.findByPk(id, {
            attributes: [ 'id', 'url', 'method' ], 
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
     * @param {Number} id - id of controlPoint that will be updated
     * @param {Object} controlPoint - body of controlPoint that will be updated
     * @return {Promise} promise with result of update
     */
    async update(id, controlPoint) {
        return await db.control_point.update(controlPoint, {where: {id: id}})
    }

     /**
     * This is a standard method to destroy an entity from a database
     * 
     * @param {Number} id - id of controlPoint that will be destroyed
     * @return {Promise} promise with result of destroy
     */
    async destroy(id) {
        return await db.control_point.destroy({where: {id: id}})
    }

    /**
     * This method reads entities by description from a database
     * 
     * @param {Object} options - description to read entities
     * @return {Promise} promise with result of create
     */
    async get(options) {        
        return await db.control_point.findOne(options)
    }
}

export default new ControlPointRepository()