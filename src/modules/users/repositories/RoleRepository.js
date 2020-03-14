const db = require('../../../dbModels');

class RoleRepository {

	/**
	 * Create an entity in a database
	 * 
	 * @param {Object} role - body of role that will be created
	 * @return {Promise} promise with result of create
	 */
	async create(role) {
		return await db.Role.create(role);
	}

	/**
	 * Read an entity from a database
	 * 
	 * @param {Number} id - id of role that will be read
	 * @return {Promise} promise with result of create
	 */
	async readById(id) {        
		return await db.Role.findByPk(id, {
			attributes: [ 'id', 'name' ],
		});
	}

	/**
	 * Read all the entities from a database
	 * 
	 * @return {Promise} promise with result of read
	 */
	async readAll() {
		return await db.Role.findAll({
			attributes: [ 'id', 'name' ],
			order: [ [ 'id' ] ]
		});
	}

	/**
	 * Update an entity from a database
	 * 
	 * @param {Number} id - id of role that will be updated
	 * @param {Object} role - body of role that will be updated
	 * @return {Promise} promise with result of update
	 */
	async update(id, role) {
		return await db.Role.update(role, {where: { id: id }});
	}

	/**
	 * Destroy an entity from a database
	 * 
	 * @param {Number} id - id of role that will be destroyed
	 * @return {Promise} promise with result of destroy
	 */
	async destroy(id) {
		return await db.Role.destroy({where: { id: id }});
	}

	/**
	 * Reads entities by description from a database
	 * 
	 * @param {Object} options - description to read entities
	 * @return {Promise} promise with array of objects
	 */
	async get(options) {        
		return await db.Role.findAll(options);
	}
}

module.exports = new RoleRepository();