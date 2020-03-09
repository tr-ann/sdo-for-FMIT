const ControlPointRepository = require('../repositories/ControlPointRepository');
const { NotFound } = require('../../../classes/errors');

class ControlPointService {

	async create(controlPoint) {
		return await ControlPointRepository.create(controlPoint);
	}

	async readAll() {
		return await ControlPointRepository.readAll();
	}

	async readById(id) {

		let controlPoint = await ControlPointRepository.readById(id);

		if (!controlPoint) {
			throw new NotFound('Control point not found');
		}

		return controlPoint;
	}

	async update(id, controlPoint) {

		let oldControlPoint = await ControlPointRepository.readById(id);
		
		if (!oldControlPoint) {
			throw new NotFound('Control point not found');
		}

		return await ControlPointRepository.update(id, controlPoint);
	}

	async destroy(id) {

		let controlPoint = await ControlPointRepository.readById(id);
		
		if (!controlPoint) {
			throw new NotFound('Control point not found');
		}
		
		return await ControlPointRepository.destroy(id);
	}
}

module.exports = new ControlPointService();