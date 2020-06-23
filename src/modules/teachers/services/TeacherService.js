const TeacherRepository = require('../repositories/TeacherRepository');
const { NotFound } = require('../../../classes/errors');

class TeacherService {

	async create(teacher) {
		
		return await TeacherRepository.create(teacher);
	}

	async readAll(pagination = { limit: 30, offset: 1 }) {
		
		return await TeacherRepository.readAll(pagination);
	}

	async findById(id) {

		let teacher = await TeacherRepository.readById(id);

		if (!teacher) {
			throw new NotFound(`Teacher not found`);
		}

		return teacher;
	}

	async update(id, teacher) {

		let oldTeacher = TeacherRepository.readById(id);

		if(!oldTeacher) {
			throw new NotFound(`Teacher not found`);
		}

		return await TeacherRepository.update(id, teacher);
	}

	async destroy(id) {

		let oldTeacher = TeacherRepository.readById(id);

		if(!oldTeacher) {
			throw new NotFound(`Teacher not found`);
		}

		await TeacherRepository.destroy(id);
	}
}

module.exports = new TeacherService();
