const UserRoleRepository = require('../repositories/UserRoleRepository');
const { NotFound } = require('../../../classes/errors');

class UserRoleService {

	async readAll() {
		return await UserRoleRepository.readAll();
	}

	async create(user_role) {
		return await UserRoleRepository.create(user_role);
	}

	async findById(id) {
		let user_role = await UserRoleRepository.readById(id);
		if (!user_role) {
			throw new NotFound(`${objectName} not found`);
		}
		return user_role;
	}

	async update(id, user_role) {
		let nUserRole = UserRoleRepository.readById(id);
		if(!nUserRole) {
			throw new NotFound(`${objectName} not found`);
		}
		return await UserRoleRepository.update(id, user_role);
	}

	async get(options) {
		return await UserRoleRepository.get(options);
	}

	async destroy(id) {
		await UserRoleRepository.destroy(id);
	}
}

module.exports = new UserRoleService();