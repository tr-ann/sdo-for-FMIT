const db = require('../../../dbModels');

class TeacherRepository {

	/**
	 * Create an entity in a database
	 * 
	 * @param {Object} teacher - body of teacher that will be created
	 * @return {Promise} promise with result of create
	 */
	async create(teacher) {
		return await db.Teacher.create(teacher);
	}

	/**
	 * Read an entity from a database
	 * 
	 * @param {Number} id - id of teacher that will be read
	 * @return {Promise} promise with result of create
	 */
	async readById(id) {        
		return await db.Teacher.findByPk(id, {
			attributes: [ 'id', 'fullName', 'shortName', 'userId' ],
			include: [
				{
					model: db.User,
					attributes: [ 'login' ],
					include: [{
						model: db.UserInfo,
						attributes: [ 'fullName', 'email', 'sex', 'description', 'birthday', 'city', 'address' ],
						as: 'userInfo'
						/*resourceId*/
					}],
					as: 'user'
				},
				{
					model: db.Department,
					attributes: [ 'name', 'phone' ],
					as: 'phones'
				},
				{
					model: db.AcademicDegree,
					attributes: [ 'name' ],
					as: 'academicDegree'
				},
				{
					model: db.AcademicRank,
					attributes: [ 'name' ],
					as: 'academicRank'
				},
				{
					model: db.Position,
					attributes: [ 'name' ],
					as: 'positions'
				}
			]
		});
	}

	/**
	 * Read all the entities from a database
	 * 
	 * @return {Promise} promise with result of read
	 */
	async readAll() {
		return await db.Teacher.findAll({
			attributes: [ 'id', 'fullName', 'shortName', 'userId' ],
			include: [
				{
					model: db.User,
					attributes: [ 'login' ],
					include: [{
						model: db.UserInfo,
						attributes: [ 'fullName', 'email', 'sex', 'description', 'birthday', 'city', 'address' ],
						as: 'userInfo'
						/*resourceId*/
					}],
					as: 'user'
				},
				{
					model: db.Department,
					attributes: [ 'name', 'phone' ],
					as: 'phones'
				},
				{
					model: db.AcademicDegree,
					attributes: [ 'name' ],
					as: 'academicDegree'
				},
				{
					model: db.AcademicRank,
					attributes: [ 'name' ],
					as: 'academicRank'
				},
				{
					model: db.Position,
					attributes: [ 'name' ],
					as: 'positions'
				}
			],
			limit: pagination.limit,
			offset: pagination.offset
		});
	}

	/**
	 * Update an entity from a database
	 * 
	 * @param {Number} id - id of teacher that will be updated
	 * @param {Object} teacher - body of teacher that will be updated
	 * @return {Promise} promise with result of update
	 */
	async update(id, teacher) {
		return await db.Teacher.update(teacher, {where: { id: id }});
	}

	/**
	 * Destroy an entity from a database
	 * 
	 * @param {Number} id - id of teacher that will be destroyed
	 * @return {Promise} promise with result of destroy
	 */
	async destroy(id) {
		return await db.Teacher.destroy({where: { id: id }});
	}

	/**
	 * Reads entities by description from a database
	 * 
	 * @param {Object} options - description to read entities
	 * @return {Promise} promise with result of create
	 */
	async get(options) {
		return await db.Teacher.findAll(options);
	}
}

module.exports = new TeacherRepository();