const AcademicRankService = require('../services/AcademicRankService');
const { responseFormat } = require('../../../helpers');

class AcademicRankController {

	async create(req, res, next) {
		let academicRank = await AcademicRankService.create({
			name: req.body.name
		});

		res
			.status(201)
			.json(
				responseFormat.build(
					academicRank, 
					"Academic rank created successfully", 
					201, 
					"success"
				)
			);
	}

	async readAll(req, res, next) {
		let academicRanks = await AcademicRankService.readAll();

		res
			.status(200)
			.json(
				responseFormat.build(
					academicRanks,
					"Academic ranks read successfully",
					200,
					"success"
				)
			);
	}

	async readById(req, res, next) {
		let academicRank = AcademicRankService.findById(req.params.id);

		res
			.status(200)
			.json(
				responseFormat.build(
					academicRank,
					"Academic rank read successfully",
					200,
					"success"
				)
			);
	}
	
	async update(req, res, next) {
		let academicRank = await AcademicRankService.update(req.params.id, {
			name: req.body.name
		});

		res
			.status(200)
			.json(
				responseFormat.build(
					academicRank,
					"Academic rank updated successfully",
					200,
					"success"
				)
			);
	}
	
	async destroy(req, res, next) {
		await AcademicRankService.delete(req.params.id);

		res
			.status(200)
			.json(
				responseFormat.build(
					{},
					"Academic rank deleted successfully",
					200,
					"success"
				)
			);
	}

}

module.exports = new AcademicRankController();