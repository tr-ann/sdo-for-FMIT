const db = require('../../../dbModels');

class RoleUrlRepository {

	async create(role_url) {
		return await db.RoleUrl.create(role_url);
	}

	async readAll() {
		return await db.RoleUrl.findAll();
	}

	async readById(id) {
		return await db.RoleUrl.findByPk(id);
	}

	async update(id, role_url) {
		return await db.RoleUrl.update(role_url, {where: {id: id}});
	}

	async get(options) {
		return await db.RoleUrl.findAll(options);
	}

	async destroy(id) {
		return await db.RoleUrl.destroy({where: {id: id}});
	}
}

module.exports = new RoleUrlRepository();