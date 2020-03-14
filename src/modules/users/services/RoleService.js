const RoleRepository = require('../repositories/RoleRepository');
const { NotFound, BadRequest } = require('../../../classes/errors');

class RoleService {

	async create(role) {
		let existingRole = await RoleRepository.get({ where: { name: role.name }});

		if (existingRole[0]) {
			throw new BadRequest('Such role already exists');
		}

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

		return role;
	}

	async update(id, role) {

		let oldRole = await RoleRepository.readById(id);
		
		if (!oldRole) {
			throw new NotFound('Role not found');
		}

		let updatedRole = await RoleRepository.get({ where: { name: role.name }});

		if (updatedRole[0]) {
			throw new BadRequest('Such role already exists');
		}

		return await oldRole.update(role);
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