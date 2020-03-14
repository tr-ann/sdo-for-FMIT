const AcademicDegreeRepository = require('../repositories/AcademicDegreeRepository');
const { NotFound } = require('../../../classes/errors');

class AcademicDegreeService {

	async create(academicDegree) {
		
		return await AcademicDegreeRepository.create(academicDegree);
	}

	async readAll(pagination = { limit: process.env.limit, offset: 1 }) {

		return await AcademicDegreeRepository.readAll(pagination);
	}

	async findById(id) {

		let academicDegree = await AcademicDegreeRepository.readById(id);

		if (!academicDegree) {
			throw new NotFound(`Academic degree not found`);
		}

		return academicDegree;
	}

	async update(id, academicDegree) {

		let oldAcademicDegree = AcademicDegreeRepository.readById(id);

		if(!oldAcademicDegree) {
			throw new NotFound(`Academic degree not found`);
		}

		return await AcademicDegreeRepository.update(id, academicDegree);
	}

	async destroy(id) {

		let oldAcademicDegree = AcademicDegreeRepository.readById(id);

		if(!oldAcademicDegree) {
			throw new NotFound(`Academic degree not found`);
		}

		await AcademicDegreeRepository.destroy(id);
	}
}

module.exports = new AcademicDegreeService();