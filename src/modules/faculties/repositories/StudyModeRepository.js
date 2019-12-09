import db from '../../../classes/dbModels'

class StudyModeRepository {
    
    /**
     * This is a standard method to read all the entities from a database
     * 
     * @return {Promise} promise with result of read
     */
    async readAll() {
        return await db.study_mode.findAll({
            attributes: ["id","name"],
        })
    }

    /**
     * This is a standard method to read an entity from a database
     * 
     * @param {Number} id - id of study mode that will be read
     * @return {Promise} promise with result of create
     */
    async readById(id) {
        return await db.study_mode.findByPk(id, {
            attributes: [
                "id",
                "name",
            ],
        })
    }

    /**
     * This is a standard method to create an entity in a database
     * 
     * @param {Object} studyMode - body of study mode that will be created
     * @return {Promise} promise with result of create
     */
    async create(studyMode) {
        return await db.study_mode.create(studyMode)
    }

    /**
     * This is a standard method to update an entity from a database
     * 
     * @param {Number} id - id of study mode that will be updated
     * @param {Object} studyMode - body of study mode that will be updated
     * @return {Promise} promise with result of update
     */
    async update(id, studyMode) {
        return await db.study_mode.update(studyMode, {where: {id: id}})
    }
   
    /**
     * This is a standard method to destroy an entity from a database
     * 
     * @param {Number} id - id of study mode that will be destroyed
     * @return {Promise} promise with result of destroy
     */
    async destroy(id) {
        return await db.study_mode.destroy({where: {id: id}})
    }

    /**
     * This method reads entities by description from a database
     * 
     * @param {Object} options - description to read entities
     * @return {Promise} promise with result of create
     */
    async get(options) {        
        return await db.study_mode.findAll(options)
    }
}

export default new StudyModeRepository()