const db = require('../../../dbModels');

class ControlPointRepository {

	/**
	 * This is a standard method to create an entity in a database
	 * 
	 * @param {Object} controlPoint - body of control point that will be created
	 * @return {Promise} promise with result of create
	 */
	async create(controlPoint) {
		return await db.ControlPoint.create(controlPoint);
	}

	/**
	 * This is a standard method to read all the entities from a database
	 * 
	 * @return {Promise} promise with result of read
	 */
	async readAll() {
		return await db.ControlPoint.findAll({
			attributes: [ 'id', 'url' ], 
			include: [
				{
					model: db.Role,
					attributes: [ 'id', 'name' ],
					as: 'roles'
				}
			]
		});
	}

	/**
	 * This is a standard method to read an entity from a database
	 * 
	 * @param {Number} id - id of control point that will be read
	 * @return {Promise} promise with result of create
	 */
	async readById(id) {
		return await db.ControlPoint.findByPk(id, {
			attributes: [ 'id', 'url' ], 
			include: [
				{
					model: db.Role,
					attributes: [ 'id', 'name' ],
					as: 'roles'
				}
			]
		});
	}

	/**
	 * This is a standard method to update an entity from a database
	 * 
	 * @param {Number} id - id of control point that will be updated
	 * @param {Object} controlPoint - body of control point that will be updated
	 * @return {Promise} promise with result of update
	 */
	async update(id, controlPoint) {
		return await db.ControlPoint.Update(controlPoint, {where: {id: id}});
	}

	 /**
	 * This is a standard method to destroy an entity from a database
	 * 
	 * @param {Number} id - id of url that will be destroyed
	 * @return {Promise} promise with result of destroy
	 */
	async destroy(id) {
		return await db.ControlPoint.destroy({where: {id: id}});
	}

	/**
	 * This method reads entities by description from a database
	 * 
	 * @param {Object} options - description to read entities
	 * @return {Promise} promise with result of create
	 */
	async get(options) {        
		return await db.ControlPoint.findAll(options);
	}
}

module.exports = new ControlPointRepository();