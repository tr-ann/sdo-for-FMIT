const db = require('../../../dbModels');

class UserInfoRepository {

	/**
	 * Create an entity in a database
	 * 
	 * @param {Object} userInfo - body of userInfo that will be created
	 * @return {Promise} promise with result of create
	 */
	async create(userInfo, options) {
		return await db.UserInfo.create(userInfo, options);
	}

	/**
	 * Read an entity from a database
	 * 
	 * @param {Number} userId - id of user who's info will be read
	 * @return {Promise} promise with result of create
	 */
	async readById(userId) {        
		return await db.UserInfo.findOne({
			attributes: [ 'id', 'fullName', 'email', 'sex', 'description', 'birthday', 'city', 'address' ],
			where: { userId: userId }
		});
	}

	/**
	 * Update an entity from a database
	 * 
	 * @param {Number} id - id of userInfo that will be updated
	 * @param {Object} userInfo - body of userInfo that will be updated
	 * @return {Promise} promise with result of update
	 */
	async update(id, userInfo, options) {
		return await db.UserInfo.update(userInfo, {where: { id: id }}, options);
	}

	/**
	 * Destroy an entity from a database
	 * 
	 * @param {Number} id - id of userInfo that will be destroyed
	 * @return {Promise} promise with result of destroy
	 */
	async destroy(id) {
		return await db.UserInfo.destroy({ where: { id: id }});
	}

	/**
	 * Reads entities by description from a database
	 * 
	 * @param {Object} options - description to read entities
	 * @return {Promise} promise with result of create
	 */
	async get(options) {        
		return await db.UserInfo.findAll(options);
	}
}

module.exports = new UserInfoRepository();