const AcademicRankRepository = require('../repositories/AcademicRankRepository');
const { NotFound } = require('../../../classes/errors');

class AcademicRankService {

	async create(academicRank) {
		return await AcademicRankRepository.create(academicRank);
	}

	async findById(id) {

		let academicRank = await AcademicRankRepository.readById(id);

		if (!academicRank) {
			throw new NotFound(`Academic rank not found`);
		}

		return academicRank;
	}

	async update(id, academicRank) {

		let oldAcademicRank = AcademicRankRepository.readById(id);

		if(!oldAcademicRank) {
			throw new NotFound(`Academic rank not found`);
		}

		return await AcademicRankRepository.update(id, academicRank);
	}

	async destroy(id) {

		let oldAcademicRank = AcademicRankRepository.readById(id);

		if(!oldAcademicRank) {
			throw new NotFound(`Academic rank not found`);
		}

		await AcademicRankRepository.destroy(id);
	}
}

module.exports = new AcademicRankService();