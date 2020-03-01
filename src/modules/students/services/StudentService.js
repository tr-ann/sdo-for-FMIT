const StudentRepository = require('../repositories/StudentRepository');
const { NotFound } = require('../../../classes/errors');

class StudentService {

	async create(student) {
		return await StudentRepository.create(student);
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

		await StudentRepository.destroy(id);
	}
}

module.exports = new StudentService();