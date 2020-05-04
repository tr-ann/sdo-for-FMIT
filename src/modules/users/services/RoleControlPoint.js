const RoleControlPointRepository = require('../repositories/RoleControlPointRepository');
const { NotFound } = require('../../../classes/errors');

class RoleControlPointService {

	async create(controlPoint) {
		return await RoleControlPointRepository.create(controlPoint);
	}

	async readAll() {
		return await RoleControlPointRepository.readAll();
	}

	async readById(id) {

		let controlPoint = await RoleControlPointRepository.readById(id);

		if (!controlPoint) {
			throw new NotFound();
		}

		return controlPoint;
	}

	async update(id, controlPoint) {

		let oldRoleControlPoint = await RoleControlPointRepository.readById(id);
		
		if (!oldRoleControlPoint) {
			throw new NotFound();
		}

		return await RoleControlPointRepository.update(id, controlPoint);
	}

	async destroy(id) {

		let controlPoint = await RoleControlPointRepository.readById(id);
		
		if (!controlPoint) {
			throw new NotFound();
		}
		
		return await RoleControlPointRepository.destroy(id);
	}
}

module.exports = new RoleControlPointService();