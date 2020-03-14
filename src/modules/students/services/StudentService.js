const StudentRepository = require('../repositories/StudentRepository');
const { NotFound } = require('../../../classes/errors');

class StudentService {

	async create(student) {

		return await StudentRepository.create(student);
	}

	async readAll(pagination = { limit: process.env.limit, offset: 1 }) {

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