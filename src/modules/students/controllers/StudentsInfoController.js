const StudentService = require('../services/StudentService');
const { responseFormat } = require('../../../helpers');
const { sequelize } = require('../../../sequelize');
const UserService = require('../../users/services/UserService');
const db = require('../../../dbModels');
const roles = require('../../../constants/usersInfo');

class StudentInfoController {

	
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

}

module.exports = new StudentInfoController();