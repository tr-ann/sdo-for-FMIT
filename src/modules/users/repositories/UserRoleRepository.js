const db = require('../../../dbModels');

class UserRoleRepository {

	async create(user_role) {
		return await db.UserRole.create(user_role);
	}

	async readAll() {
		return await db.UserRole.findAll();
	}

	async readById(id) {
		return await db.UserRole.findByPk(id);
	}

	async update(id, user_role) {
		return await db.UserRole.update(user_role, {where: {id: id}});
	}

	async get(options) {
		return await db.UserRole.findAll(options);
	}

	async destroy(id) {
		return await db.UserRole.destroy({where: {id: id}});
	}
}

module.exports = new UserRoleRepository();