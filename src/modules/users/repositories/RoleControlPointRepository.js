const db = require('../../../dbModels');

class RoleControlPointRepository {

	/**
	 * This is a standard method to create an entity in a database
	 * 
	 * @param {Object} roleControlPoint - body that will be created
	 * @return {Promise} promise with result of create
	 */
	async create(roleControlPoint) {
		return await db.RoleControlPoint.create(roleControlPoint);
	}

	/**
	 * This is a standard method to read all the entities from a database
	 * 
	 * @return {Promise} promise with result of read
	 */
	async readAll() {
		return await db.RoleControlPoint.findAll({
			attributes: [ 'id', 'permissionMask' ], 
			include: [
				{
					model: db.Role,
					attributes: [ 'id', 'name' ],
					as: 'role',
        },        
				{
					model: db.ControlPoint,
					attributes: [ 'id', 'url' ],
					as: 'controlPoint',
				},
			],
		});
	}

	/**
	 * This is a standard method to read an entity from a database
	 * 
	 * @param {Number} id - id that will be read
	 * @return {Promise} promise with result of create
	 */
	async readById(id) {
		return await db.RoleControlPoint.findByPk(id, {
			attributes: [ 'id', 'permissionMask' ], 
			include: [
				{
					model: db.Role,
					attributes: [ 'id', 'name' ],
					as: 'role',
        },        
				{
					model: db.ControlPoint,
					attributes: [ 'id', 'url' ],
					as: 'controlPoint',
				},
			],
		});
	}

	/**
	 * This is a standard method to update an entity from a database
	 * 
	 * @param {Number} id - id that will be updated
	 * @param {Object} roleControlPoint - body that will be updated
	 * @return {Promise} promise with result of update
	 */
	async update(id, roleControlPoint) {
		return await db.RoleControlPoint.Update(roleControlPoint, { where: { id } });
	}

  /**
   * This is a standard method to destroy an entity from a database
   * 
   * @param {Number} id - id that will be destroyed
   * @return {Promise} promise with result of destroy
   */
	async destroy(id) {
		return await db.RoleControlPoint.destroy({ where: { id } });
	}

	/**
	 * This method reads entities by description from a database
	 * 
	 * @param {Object} options - description to read entities
	 * @return {Promise} promise with result of create
	 */
	async get(options) {        
		return await db.RoleControlPoint.findAll(options);
	}
}

module.exports = new RoleControlPointRepository();