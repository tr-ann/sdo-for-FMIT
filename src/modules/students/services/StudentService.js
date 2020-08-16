const StudentRepository = require('../repositories/StudentRepository');
const { NotFound } = require('../../../classes/errors');
const { DEFAULT_AMOUNT, DEFAULT_PAGE } = require('../../../constants/paginationInfo');

const defaultPagination = { 
	limit: DEFAULT_AMOUNT,
	offset: DEFAULT_PAGE
}

class StudentService {

	async create(student, options) {
		return await StudentRepository.create(student, options);
	}

	async readAll(pagination = defaultPagination) {

		return await StudentRepository.readAll(pagination);
	}

	async findById(id) {

		let student = await StudentRepository.readById(id);

		if (!student) {
			throw new NotFound(`Student not found`);
		}

		return student;
	}

	async update(id, student) {

		let oldStudent = StudentRepository.readById(id);

		if(!oldStudent) {
			throw new NotFound(`Student not found`);
		}

		return await StudentRepository.update(id, student);
	}

	async destroy(id) {

		let oldStudent = StudentRepository.readById(id);

		if(!oldStudent) {
			throw new NotFound(`Student not found`);
		}

		return await StudentRepository.destroy(id);
	}

	async get(options) {
		
		return await StudentRepository.get(options);
	}
}

module.exports = new StudentService();