const UserService = require('../services/UserService');
const UserInfoService = require('../services/UserInfoService');
const PhoneService = require('../services/PhoneService');
const { responseFormat } = require('../../../helpers');
const { sequelize } = require('../../../sequelize');
const roles = require('../../../constants/rolesInfo');
const db = require('../../../dbModels');

class UserController {

	async create(req, res, next) {

		let createdUser = await sequelize.transaction( async (transaction) => {

			let login = `${req.body.lastName}${req.body.firstName[0]}`;
			if (req.body.middleName) {
				login = login.concat(req.body.middleName[0]);
			}

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
					{ id: createdUser.id },
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
		
		let updatedUser = await sequelize.transaction( async (transaction) => {
		
			await PhoneService.addToUser(req.user.id, req.body.phones, { transaction: transaction });

			await db.UserInfo.update({
				fullName: req.body.fullName,
				email: req.body.email,
				birthday: req.body.birthday,
				sex: req.body.sex,
				description: req.body.description,
				city: req.body.city,
				address: req.body.address
			}, {
				where: { userId: req.user.id },
				transaction: transaction
			});

		});

		if(req.body.newPassword) {
			await UserService.changePassword(req.user.id, req.body.oldPassword, req.body.newPassword);
		}
		
		res
			.status(200)
			.json(
				responseFormat.build(
					updatedUser,
					"User updated successfully",
					200,
					"success"
				)
			);
	}

	async restorePassword(req, res, next) {

		res
			.status(200)
			.json(
				responseFormat.build(
					{},
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