const StudentService = require('../services/StudentService');
const { responseFormat } = require('../../../helpers');
const { sequelize } = require('../../../sequelize');
const UserService = require('../../users/services/UserService');
const db = require('../../../dbModels');
const roles = require('../../../constants/rolesInfo');

class StudentController {

	async create(req, res, next) {

		let student = await sequelize.transaction( async (transaction) => {

			let user = await UserService.readById(req.body.userId);

			const student = await StudentService.create({
				userId: user.id,
				fullName: user.userInfo.fullName,
				groupId: req.body.groupId,
				recordBook: req.body.recordBook,
				studentInfo: {
					sex: user.userInfo.sex,
					birthday: user.userInfo.birthday,
					cityId: user.userInfo.cityId,
					address: user.userInfo.address,
				}
			}, {
				include: [{
					model: db.StudentInfo,
					as: 'studentInfo',
				}],
				transaction: transaction,
			});

			await user.setStudent(student.id, { transaction: transaction });
			await user.addRole(roles.STUDENT_ROLE_ID, { transaction: transaction })

			return student;
		})

		res
			.status(201)
			.json(
				responseFormat.build(
					{
						id: student.id,
						recordBook: student.recordBook 
					}, 
					"Student created successfully", 
					201, 
					"success"
				)
			);
	}

	async readAll(req, res, next) {
		let students = await StudentService.readAll();

		res
			.status(200)
			.json(
				responseFormat.build(
					students,
					"Students read successfully",
					200,
					"success"
				)
			);
	}

	async readById(req, res, next) {
		let student = await StudentService.findById(req.params.id);

		res
			.status(200)
			.json(
				responseFormat.build(
					student,
					"Student read successfully",
					200,
					"success"
				)
			);
	}
	
	async update(req, res, next) {
		let student = await StudentService.update(
			req.params.id,
			{
				fullName: req.body.fullName,
				shortName: req.body.shortName,
				groupId: req.body.groupId,
				recordBook: req.body.recordBook,
			}
		);

		res
			.status(200)
			.json(
				responseFormat.build(
					student,
					"Student updated successfully",
					200,
					"success"
				)
			);
	}
	
	async destroy (req, res, next) {

		// ??????????????????
		
		await StudentService.destroy(req.params.studentId);

		res
			.status(200)
			.json(
				responseFormat.build(
					{},
					"Student deleted successfully",
					200,
					"success"
				)
			);
	}
}

module.exports = new StudentController();