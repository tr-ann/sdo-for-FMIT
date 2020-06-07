const TeacherService = require('../services/TeacherService');
const { responseFormat } = require('../../../helpers');
const { sequelize } = require('../../../sequelize');

class TeacherController {

	async create(req, res, next) {

		let createdTeacher = await sequelize.transaction( async (transaction) => {
			let teacher = await TeacherService.create({
				userId: req.body.user,
				fullName: req.body.fullName,
				shortName: req.body.shortName,
				departmentId: req.body.department,
				academicDegreeId: req.body.academicDegree,
				academicRankId: req.body.academicRank,
			}, { transaction: transaction });

			await teacher.createPosition({
				teacherId: teacher.id,
				departmentId: teacher.departmentId,
				positionId: req.body.position,
				rate: req.body.rate
			}, { transaction: transaction })

			return teacher;
		});
		
		res
			.status(201)
			.json(
				responseFormat.build(
					{ id: createdTeacher.id },
					"Teacher created successfully",
					201,
					"success"
				)
			);
	}

	async readAll(req, res, next) {
			let teachers = await TeacherService.readAll();

			//console.log(`HELLO FROM TEACHERS`)

			res
				.status(200)
				.json(
					responseFormat.build(
						teachers,
						"Teachers read successfully",
						200,
						"success"
					)
				);
	}

	async readById(req, res, next) {

		let teacher = await TeacherService.findById(req.params.id);

		res
			.status(200)
			.json(
				responseFormat.build(
					teacher,
					"Teacher read successfully",
					200,
					"success"
				)
			);
	}
	
	async update(req, res, next) {
		let teacher = await TeacherService.update(req.params.id, {
			fullName: req.body.fullName,
			shortName: req.body.shortName,
			departmentId: req.body.department,
			academicDegreeId: req.body.academicDegree,
			academicRankId: req.body.academicRank,
		});

		res
			.status(200)
			.json(
				responseFormat.build(
					teacher,
					"Teacher updated successfully",
					200,
					"success"
				)
			);
	}
	
	async destroy (req, res, next) {
		await TeacherService.destroy(req.params.id);

		res
			.status(200)
			.json(
				responseFormat.build(
					{},
					"Teacher deleted successfully",
					200,
					"success"
				)
			);
	}
	
}

module.exports = new TeacherController();