const StudentRepository = require('../repositories/StudentRepository');
const { NotFound, BadRequest, InternalServerError } = require('../../../classes/errors');
const { DEFAULT_AMOUNT, DEFAULT_PAGE } = require('../../../constants/paginationInfo');
const { sequelize } = require('../../../sequelize');
const UserService = require('../../users/services/UserService');
const StudentInfoService = require('./StudentInfoService');
const db = require('../../../dbModels');
const roles = require('../../../constants/rolesInfo');

const defaultPagination = { 
	limit: DEFAULT_AMOUNT,
	offset: DEFAULT_PAGE - 1
}

class StudentService {

	async create(data) {

		let student = await sequelize.transaction(async (transaction) => {

			let user = await UserService.readById(data.userId);

			let isStudent = await user.getStudent();
			if (isStudent) {
				throw new BadRequest('User already has student role');
			}

			const student = await StudentRepository.create({
				userId: user.id,
				fullName: data.fullName || user.userInfo.fullName,
				groupId: data.groupId,
				recordBook: data.recordBook,
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
		});

		return student;
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

	async update(id, studentInfo) {

		let student = await StudentRepository.readById(id);

		if(!student) {
			throw new NotFound(`Student not found`);
		}

		await StudentRepository.update(id, {
			fullName: studentInfo.fullName,
			groupId: studentInfo.groupId,			// ???
			recordBook: studentInfo.recordBook,	// ???
		});

		// Promise.allSettled

		await StudentInfoService.update(student.studentInfo.id, studentInfo);

		return;
	}

	async destroy(id) {

		let student = await StudentRepository.readById(id);

		if(!student) {
			throw new NotFound(`Student not found`);
		}

		sequelize.transaction(async (transaction) => {

			let user = await UserService.readById(student.userId);

			await StudentInfoService.destroy(student.studentInfo.id, {transaction: transaction});

			await StudentRepository.destroy(id, {transaction: transaction});

			let studentRole = await user.getRoles({ where: { id: roles.STUDENT_ROLE_ID }});

			if (studentRole && studentRole[0]) {
				await user.removeRole(studentRole[0].id, {	transaction: transaction });
			}
			else {
				throw new InternalServerError('role not found');
			}

		})

		return id;
	}

	async get(options) {
		return await StudentRepository.get(options);
	}
}

module.exports = new StudentService();