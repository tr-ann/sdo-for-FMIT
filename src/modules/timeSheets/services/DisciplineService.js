const DisciplineRepository = require('../repositories/DisciplineRepository');
const { NotFound } = require('../../../classes/errors');

class DisciplineService {

	async create(discipline) {
		
		return await DisciplineRepository.create(discipline);
	}

	async readAll(pagination = { limit: process.env.limit, offset: 0 }) {
		
		return await DisciplineRepository.readAll(pagination);
	}

	async findById(id) {

		let discipline = await DisciplineRepository.readById(id);

		if (!discipline) {
			throw new NotFound(`Discipline not found`);
		}

		return discipline;
	}

	async update(id, discipline) {

		let oldDiscipline = DisciplineRepository.readById(id);

		if(!oldDiscipline) {
			throw new NotFound(`Discipline not found`);
		}

		return await DisciplineRepository.update(id, discipline);
	}

	async destroy(id) {

		let oldDiscipline = DisciplineRepository.readById(id);

		if(!oldDiscipline) {
			throw new NotFound(`Discipline not found`);
		}

		await DisciplineRepository.destroy(id);
	}

	async get(options) {        
    return await DisciplineRepository.get(options);
  }
}

module.exports = new DisciplineService();