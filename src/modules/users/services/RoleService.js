const RoleRepository = require('../repositories/RoleRepository');
const { NotFound } = require('../../../classes/errors');

class RoleService {

	async create(role) {
		return await RoleRepository.create(role);
	}

	async readAll() {
		return await RoleRepository.readAll();
	}

	async readById(id) {

		let role = await RoleRepository.readById(id);

		if (!role) {
			throw new NotFound('Role not found');
		}

		return role
	}

	async update(id, role) {

		let oldRole = await RoleRepository.readById(id);
		
		if (!oldRole) {
			throw new NotFound('Role not found');
		}

		return await RoleRepository.update(id, role);
	}

	async destroy(id) {

		let role = await RoleRepository.readById(id);
		
		if (!role) {
			throw new NotFound('Role not found');
		}
		
		return await RoleRepository.destroy(id);
	}
}

module.exports = new RoleService();