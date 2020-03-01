const PositionRepository = require('../repositories/PositionRepository');
const { NotFound } = require('../../../classes/errors');

class PositionService {

	async create(position) {
		return await PositionRepository.create(position);
	}

	async findById(id) {

		let position = await PositionRepository.readById(id);

		if (!position) {
			throw new NotFound(`Position not found`);
		}

		return position;
	}

	async update(id, position) {

		let oldPosition = PositionRepository.readById(id);

		if(!oldPosition) {
			throw new NotFound(`Position not found`);
		}

		return await PositionRepository.update(id, position);
	}

	async destroy(id) {

		let oldPosition = PositionRepository.readById(id);

		if(!oldPosition) {
			throw new NotFound(`Position not found`);
		}

		await PositionRepository.destroy(id);
	}
}

module.exports = new PositionService();