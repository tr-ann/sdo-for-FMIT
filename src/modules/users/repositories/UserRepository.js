const db = require('../../../dbModels');

class UserRepository {

	/**
	 * Create an entity in a database
	 * 
	 * @param {Object} user - body of user that will be created
	 * @return {Promise} promise with result of create
	 */
	async create(user, options) {
		return await db.User.create(user, options);
	}

	/**
	 * Read an entity from a database
	 * 
	 * @param {Number} id - id of user that will be read
	 * @return {Promise} promise with result of create
	 */
	async readById(id) {        
		return await db.User.findByPk(id, {
			attributes: [ 'id', 'login' ],
			include: [
				{ 
					model: db.UserInfo,
					attributes: [ 'id', 'fullName', 'email', 'sex', 'description', 'birthday', 'cityId', 'address' ],
					as: 'userInfo'
				},
				{
					model: db.Role,
					attributes: [ 'id', 'name' ],
					as: 'roles'
				},
				{
					model: db.Phone,
					attributes: [ 'id', 'phone' ],
					as: 'phones'
				}
			]
		});
	}

	/**
	 * Read all the entities from a database
	 * 
	 * @return {Promise} promise with result of read
	 */
	async readAll(pagination) {
		return await db.User.findAll({
			attributes: [ 'id', 'login' ],
			include: [
				{ 
					model: db.UserInfo,
					attributes: [ 'fullName', 'email' ],
					as: 'userInfo'
				},
				{
					model: db.Role,
					attributes: [ 'id', 'name' ],
					as: 'roles'
				},
			],
			limit: pagination.limit,
			offset: pagination.offset
		});
	}

	/**
	 * Update an entity from a database
	 * 
	 * @param {Number} id - id of user that will be updated
	 * @param {Object} user - body of user that will be updated
	 * @return {Promise} promise with result of update
	 */
	async update(id, user) {
		return await db.User.update(user, {where: { id: id }});
	}

	/**
	 * Destroy an entity from a database
	 * 
	 * @param {Number} id - id of user that will be destroyed
	 * @return {Promise} promise with result of destroy
	 */
	async destroy(id) {
		return await db.User.destroy({where: { id: id }});
	}

	/**
	 * Reads entities by description from a database
	 * 
	 * @param {Object} options - description to read entities
	 * @return {Promise} promise with result of create
	 */
	async get(options) {        
		return await db.User.findAll(options);
	}
}

module.exports = new UserRepository();