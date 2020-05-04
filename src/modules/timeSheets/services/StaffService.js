const StaffRepository = require('../repositories/StaffRepository');
const { NotFound } = require('../../../classes/errors');

class StaffService {

	async create(staff) {
		
		return await StaffRepository.create(staff);
	}

	async readAll(pagination = { limit: process.env.limit, offset: 0 }) {
		
		return await StaffRepository.readAll();
	}

	async findById(id) {

		let staff = await StaffRepository.readById(id);

		if (!staff) {
			throw new NotFound(`Staff not found`);
		}

		return staff;
	}

	async update(id, staff) {

		let oldStaff = StaffRepository.readById(id);

		if(!oldStaff) {
			throw new NotFound(`Staff not found`);
		}

		return await StaffRepository.update(id, staff);
	}

	async destroy(id) {

		let oldStaff = StaffRepository.readById(id);

		if(!oldStaff) {
			throw new NotFound(`Staff not found`);
		}

		await StaffRepository.destroy(id);
	}
	
	async get(options) {        
    return await StaffRepository.get(options);
  }
}

module.exports = new StaffService();