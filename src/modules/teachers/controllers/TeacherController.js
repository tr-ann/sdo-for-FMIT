const TeacherService = require('../services/TeacherService');
const { ResponseFormat } = require('../../../helpers');

class TeacherController {

	async create(req, res, next) {
		let teacher = await TeacherService.create({
			userId:            req.body.userId,
			departmentId:      req.body.departmentId,
			positionId:        req.body.positionId,
			academicDegreeId: req.body.academicDegreeId,
			academicRankId:   req.body.academicRankId,
		});
		
		res
			.status(201)
			.json(
				ResponseFormat.build(
					teacher,
					"Teacher created successfully",
					201,
					"success"
				)
			);
	}

	async readAll(req, res, next) {
			let teachers = await TeacherService.readAll();

			res
				.status(200)
				.json(
					ResponseFormat.build(
						teachers,
						"Teachers read successfully",
						200,
						"success"
					)
				);
	}

	async readById(req, res, next) {
		let teacher = TeacherService.findById(req.params.id);

		res
			.status(200)
			.json(
				ResponseFormat.build(
					teacher,
					"Teacher read successfully",
					200,
					"success"
				)
			);
	}
	
	async update(req, res, next) {
		let teacher = await TeacherService.update(req.params.id, {
			fullName:          req.body.fullName,
			shortName:         req.body.shortName,
			departmentId:      req.body.departmentId,
			positionId:        req.body.positionId,
			academicDegreeId: req.body.academicDegreeId,
			academicRankId:   req.body.academicRankId,
		});

		res
			.status(200)
			.json(
				ResponseFormat.build(
					teacher,
					"Teacher updated successfully",
					200,
					"success"
				)
			);
	}
	
	async destroy (req, res, next) {
		await TeacherService.delete(req.params.id);

		res
			.status(200)
			.json(
				ResponseFormat.build(
					{},
					"Teacher deleted successfully",
					200,
					"success"
				)
			);
	}
	
}

module.exports = new TeacherController();