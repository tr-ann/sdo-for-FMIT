const db = require('../../../dbModels');

class AcademicDegreeRepository {

	/**
	 * Create an entity in a database
	 * 
	 * @param {Object} academicDegree - body of academic degree that will be created
	 * @return {Promise} promise with result of create
	 */
	async create(academicDegree) {
		return await db.AcademicDegree.create(academicDegree);
	}

	/**
	 * Read an entity from a database
	 * 
	 * @param {Number} id - id of academic degree that will be read
	 * @return {Promise} promise with result of create
	 */
	async readById(id) {        
		return await db.AcademicDegree.findByPk(id, {
			attributes: [ 'id', 'name' ],
		});
	}

	/**
	 * Read all the entities from a database
	 * 
	 * @return {Promise} promise with result of read
	 */
	async readAll() {
		return await db.AcademicDegree.findAll({
			attributes: [ 'id', 'name' ],
		});
	}

	/**
	 * Update an entity from a database
	 * 
	 * @param {Number} id - id of academic degree that will be updated
	 * @param {Object} academicDegree - body of academic degree that will be updated
	 * @return {Promise} promise with result of update
	 */
	async update(id, academicDegree) {
		return await db.AcademicDegree.update(academicDegree, {where: { id: id }});
	}

	/**
	 * Destroy an entity from a database
	 * 
	 * @param {Number} id - id of academic degree that will be destroyed
	 * @return {Promise} promise with result of destroy
	 */
	async destroy(id) {
		return await db.AcademicDegree.destroy({where: { id: id }});
	}

	/**
	 * Reads entities by description from a database
	 * 
	 * @param {Object} options - description to read entities
	 * @return {Promise} promise with result of create
	 */
	async getAll(options) {
		return await db.AcademicDegree.findAll(options);
	}

	/**
	 * Reads entity by description from a database
	 * 
	 * @param {Object} options - description to read entity
	 * @return {Promise} promise with result of create
	 */
	async get(options) {        
		return await db.AcademicDegree.findOne(options);
	}
}

module.exports = new AcademicDegreeRepository();