import db from '../../../config/dbModels'

class DepartmentRepository {
    
    /**
     * This is a standard method to read all the entities from a database
     * 
     * @return {Promise} promise with result of read
     */
    async readAll() {
        return await db.department.findAll({
            attributes: [ 'id', 'name', 'phone', 'deleted_date' ],
            include: [
                {
                    model: db.faculty,
                    as: 'faculty',
                    attributes: [ 'name' ],
                },
                {
                    model: db.user,
                    as: 'user',
                    attributes: [ 'login' ],
                },
                {
                    model: db.lecture_room,
                    as: 'lecture_room',
                    attributes: [ 'number' ],
                },
            ],
        })
    }

    /**
     * This is a standard method to read an entity from a database
     * 
     * @param {Number} id - id of department that will be read
     * @return {Promise} promise with result of create
     */
    async readById(id) {
        return await db.department.findByPk(id, {
            attributes: [
                'id',
                'name',
                'faculty_id',
                'owner_id',
                'phone',
                'room_id',
            ],
        })
    }

    /**
     * This is a standard method to create an entity in a database
     * 
     * @param {Object} department - body of department that will be created
     * @return {Promise} promise with result of create
     */
    async create(department) {
        return await db.department.create(department)
    }

    /**
     * This is a standard method to update an entity from a database
     * 
     * @param {Number} id - id of department that will be updated
     * @param {Object} department - body of department that will be updated
     * @return {Promise} promise with result of update
     */
    async update(id, department) {
        return await db.department.update(department, {where: {id: id}})
    }
   
    /**
     * This is a standard method to destroy an entity from a database
     * 
     * @param {Number} id - id of department that will be destroyed
     * @return {Promise} promise with result of destroy
     */
    async destroy(id) {
        return await db.department.destroy({where: {id: id}})
    }

    /**
     * This method reads entities by description from a database
     * 
     * @param {Object} options - description to read entities
     * @return {Promise} promise with result of create
     */
    async get(options) {        
        return await db.department.findAll(options)
    }
}

export default new DepartmentRepository()