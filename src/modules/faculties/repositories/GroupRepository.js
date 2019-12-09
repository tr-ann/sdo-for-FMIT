import db from '../../../config/dbModels'

class GroupRepository {
    
    /**
     * This is a standard method to read all the entities from a database
     * 
     * @return {Promise} promise with result of read
     */
    async readAll() {
        return await db.group.findAll({
            attributes: [ 'id', 'number' ],
            include: [
                {
                    model: db.faculty,
                    as: 'faculty',
                    attributes: [ 'id', 'name' ],
                },
                {
                    model: db.specialty,
                    as: 'specialty',
                    attributes: [ 'id', 'name' ],
                },
                {
                    model: db.study_mode,
                    as: 'study_mode',
                    attributes: [ 'id', 'name' ],
                },
                {
                    model: db.teacher,
                    as: 'teachers',
                    attributes: [ 'id', 'full_name' ],
                },
            ],
        })
    }

    /**
     * This is a standard method to read an entity from a database
     * 
     * @param {Number} id - id of group that will be read
     * @return {Promise} promise with result of create
     */
    async readById(id) {
        return await db.group.findByPk(id, {
            attributes: [ 'id', 'number' ],
            include: [
                {
                    model: db.faculty,
                    as: 'faculty',
                    attributes: [ 'id', 'name' ],
                },
                {
                    model: db.specialty,
                    as: 'specialty',
                    attributes: [ 'id', 'name' ],
                },
                {
                    model: db.study_mode,
                    as: 'study_mode',
                    attributes: [ 'id', 'name' ],
                },
                {
                    model: db.teacher,
                    as: 'teachers',
                    attributes: [ 'id', 'full_name' ],
                },
            ],
        })
    }

    /**
     * This is a standard method to create an entity in a database
     * 
     * @param {Object} group - body of group that will be created
     * @return {Promise} promise with result of create
     */
    async create(group) {
        return await db.group.create(group)
    }

    /**
     * This is a standard method to update an entity from a database
     * 
     * @param {Number} id - id of group that will be updated
     * @param {Object} group - body of group that will be updated
     * @return {Promise} promise with result of update
     */
    async update(id, group) {
        return await db.group.update(group, {where: {id: id}})
    }
   
    /**
     * This is a standard method to destroy an entity from a database
     * 
     * @param {Number} id - id of group that will be destroyed
     * @return {Promise} promise with result of destroy
     */
    async destroy(id) {
        return await db.group.destroy({where: {id: id}})
    }

    /**
     * This method reads entities by description from a database
     * 
     * @param {Object} options - description to read entities
     * @return {Promise} promise with result of create
     */
    async get(options) {        
        return await db.group.findAll(options)
    }
}

export default new GroupRepository()