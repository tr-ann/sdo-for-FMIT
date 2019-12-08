import db from '../../../config/dbModels'

class FacultyRepository {
    
    /**
     * This is a standard method to read all the entities from a database
     * 
     * @return {Promise} promise with result of read
     */
    async readAll() {
        return await db.faculty.findAll({
            attributes: ["id", "name", "short_name"],
            include: [
                {
                    model: db.facultyInfo,
                    as: 'info_faculty',
                    attributes: [ 'id', 'description' ],
                },
            ],
        })
    }

    /**
     * This is a standard method to read an entity from a database
     * 
     * @param {Number} id - id of faculty that will be read
     * @return {Promise} promise with result of create
     */
    async readById(id) {
        return await db.faculty.findByPk(id,{
            attributes: [
                "id",
                "name",
                "short_name",
            ],
        })
    }

    /**
     * This is a standard method to create an entity in a database
     * 
     * @param {Object} faculty - body of faculty that will be created
     * @return {Promise} promise with result of create
     */
    async create(faculty) {
        return await db.faculty.create(faculty)
    }

    /**
     * This is a standard method to update an entity from a database
     * 
     * @param {Number} id - id of faculty that will be updated
     * @param {Object} faculty - body of faculty that will be updated
     * @return {Promise} promise with result of update
     */
    async update(id, faculty) {
        return await db.faculty.update(faculty, {where: {id: id}})
    }
   
    /**
     * This is a standard method to destroy an entity from a database
     * 
     * @param {Number} id - id of faculty that will be destroyed
     * @return {Promise} promise with result of destroy
     */
    async destroy(id) {
        return await db.faculty.destroy({where: {id: id}})
    }

    /**
     * This method reads entities by description from a database
     * 
     * @param {Object} options - description to read entities
     * @return {Promise} promise with result of create
     */
    async get(options) {        
        return await db.faculty.findAll(options)
    }
}

export default new FacultyRepository()