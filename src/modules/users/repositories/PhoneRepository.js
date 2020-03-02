const db = require('../../../dbModels');

class PhoneRepository {

	/**
	 * Create an entity in a database
	 * 
	 * @param {Object} phone - body of phone that will be created
	 * @return {Promise} promise with result of create
	 */
	async create(phone) {
		return await db.phone.create(phone);
	}

	/**
	 * Read an entity from a database
	 * 
	 * @param {Number} id - id of phone that will be read
	 * @return {Promise} promise with result of create
	 */
	async readById(id) {        
		return await db.phone.findByPk(id, {
			attributes: [ 'id', 'phone' ],
		});
	}

	/**
	 * Read all the entities from a database
	 * 
	 * @return {Promise} promise with result of read
	 */
	async readAll() {
		return await db.phone.findAll({
			attributes: [ 'id', 'phone' ],
		});
	}

	/**
	 * Update an entity from a database
	 * 
	 * @param {Number} id - id of phone that will be updated
	 * @param {Object} phone - body of phone that will be updated
	 * @return {Promise} promise with result of update
	 */
	async update(id, phone) {
		return await db.phone.update(phone, {where: { id: id }});
	}

	/**
	 * Destroy an entity from a database
	 * 
	 * @param {Number} id - id of phone that will be destroyed
	 * @return {Promise} promise with result of destroy
	 */
	async destroy(id) {
		return await db.phone.destroy({where: { id: id }});
	}

	/**
	 * Reads entities by description from a database
	 * 
	 * @param {Object} options - description to read entities
	 * @return {Promise} promise with result of create
	 */
	async get(options) {        
		return await db.phone.findAll(options);
	}
}

module.exports = new PhoneRepository();