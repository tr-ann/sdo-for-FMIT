const UserService = require('../services/UserService');
const UserInfoService = require('../services/UserInfoService');
const PhoneService = require('../services/PhoneService');
const { responseFormat } = require('../../../helpers');
const { sequelize } = require('../../../sequelize');
const roles = require('../../../constants/rolesInfo');
const db = require('../../../dbModels');
const { BadRequest, NotFound } = require('../../../classes/errors');

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

		// TODO: перенести метод в сервис и сделать все через сервисы, а не db
		
		await sequelize.transaction( async (transaction) => {
		
			//await PhoneService.addToUser(/*req.user.id*/req.params.id, req.body.phones, { transaction: transaction });

			let user = await UserService.readById(req.params.id);

			if (!user) {
				throw new NotFound('User not found');
			}

			await user.setPhones(req.body.phones);

			await db.UserInfo.update({
				fullName: req.body.fullName,
				email: req.body.email,
				birthday: req.body.birthday,
				sex: req.body.sex,
				description: req.body.description,
				city: req.body.city,
				address: req.body.address
			}, {
				where: { userId: user.id },
				transaction: transaction
			});

			return;
		});
		
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
			throw new BadRequest("Ай-яй, не в своего пользователя лезете");
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