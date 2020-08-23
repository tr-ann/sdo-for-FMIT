const UserService = require('../services/UserService');
const UserInfoService = require('../services/UserInfoService');
const { responseFormat } = require('../../../helpers');
const { sequelize } = require('../../../sequelize');
const roles = require('../../../constants/rolesInfo');
const { BadRequest } = require('../../../classes/errors');

class UserController {

	async create(req, res, next) {

		let user = await sequelize.transaction( async (transaction) => {

			let login = `${req.body.lastName}${req.body.firstName[0]}${req.body.middleName?.[0] || ''}`;

			let user = await UserService.create({
				login: login,
				password: req.body.password,
			}, {
				transaction: transaction,
			});

      let fullName = `${req.body.lastName} ${req.body.firstName} ${req.body.middleName || ''}`;

			let userInfo = await UserInfoService.create({
				userId: user.id,
				fullName: fullName,
			}, {
				transaction: transaction
			});
	
			await user.setUserInfo(userInfo, { transaction: transaction	});
			await user.setRoles(roles.DEFAULT_ROLE_ID, { transaction: transaction	});

			return user;
		});

		res
			.status(201)
			.json(
				responseFormat.build(
					{ id: user.id },
					"User created successfully", 
					201, 
					"success"
				)
			);
	}

	async readAll(req, res, next) {
		let users = await UserService.readAll();

		res
			.status(200)
			.json(
				responseFormat.build(
					users,
					"Users read successfully",
					200,
					"success"
				)
			);
	}

	async readById(req, res, next) {
		let user = await UserService.readById(req.params.id);
		
		res
			.status(200)
			.json(
				responseFormat.build(
					user,
					"User read successfully",
					200,
					"success"
				)
			);
	}
	
	async update(req, res, next) {		
		await UserService.update(req.params.id, req.body);
		
		res
			.status(200)
			.json(
				responseFormat.build(
					null,
					"User updated successfully",
					200,
					"success"
				)
			);
	}

	async updatePassword(req, res, next) {

		if (req.user.id === req.params.id) {
			await UserService.changePassword(req.user.id, req.body.oldPassword, req.body.newPassword);
		}
		else {
			throw new BadRequest();
		}

		res
			.status(200)
			.json(
				responseFormat.build(
					null,
					"Password successfully restored",
					200,
					"success"
				)
			);
	}
	
	async destroy(req, res, next) {
		await UserService.destroy(req.params.id);

		res
			.status(200)
			.json(
				responseFormat.build(
					{},
					"User deleted successfully",
					200,
					"success"
				)
			);
	}
}

module.exports = new UserController();