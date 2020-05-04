const TimeSheetRepository = require('../repositories/TimeSheetRepository');
const { NotFound } = require('../../../classes/errors');

class TimeSheetService {

	async create(timeSheet) {
		
		return await TimeSheetRepository.create(timeSheet);
	}

	async readAll(pagination = { limit: process.env.limit, offset: 0 }) {
		
		return await TimeSheetRepository.readAll();
	}

	async findById(id) {

		let timeSheet = await TimeSheetRepository.readById(id);

		if (!timeSheet) {
			throw new NotFound(`TimeSheet not found`);
		}

		return timeSheet;
	}

	async update(id, timeSheet) {

		let oldTimeSheet = TimeSheetRepository.readById(id);

		if(!oldTimeSheet) {
			throw new NotFound(`TimeSheet not found`);
		}

		return await TimeSheetRepository.update(id, timeSheet);
	}

	async destroy(id) {

		let oldTimeSheet = TimeSheetRepository.readById(id);

		if(!oldTimeSheet) {
			throw new NotFound(`TimeSheet not found`);
		}

		await TimeSheetRepository.destroy(id);
	}
	
	async get(options) {        
    return await TimeSheetRepository.get(options);
  }
}

module.exports = new TimeSheetService();