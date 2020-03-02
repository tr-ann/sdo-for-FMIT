const UserService = require('../services/UserService');
const UserInfoService = require('../services/UserInfoService');
const PhoneService = require('../services/PhoneService');
const { responseFormat } = require('../../../helpers');
const UserRoleService = require('../services/UserRoleService');

class UserController {

	async create(req, res, next) {
		let user = await UserService.create({
			login: req.body.login,
			password: req.body.password,
		});

		await PhoneService.create({
			user_id: user.id, 
			phone: req.body.phone
		});

		let fullName = req.body.first_name 
				+ ' ' + req.body.last_name 
				+ ' ' + (req.body.middle_name || '');

		await UserInfoService.create({
			user_id: user.id,
			full_name: fullName,
			email: req.body.email,
			birthday: req.body.birthday,
			sex: req.body.sex,
		});

		await UserRoleService.create({user_id: user.id, role_id: 1});

		res
			.status(201)
			.json(
				responseFormat.build(
					user.login, 
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
		let user = await UserService.update(req.params.id, {
			password: req.body.password,
		});

		/*await PhoneService.update({
			user_id: user.id, 
			phone: req.body.phone
		})

		let fullName = req.body.first_name 
				+ ' ' + req.body.last_name 
				+ ' ' + (req.body.middle_name || '')

		await UserInfoService.update({
			full_name: fullName,
			email: req.body.email,
			birthday: req.body.birthday,
			sex: req.body.sex,
		})

		UserRoleService.create({user_id: user.id, role_id: 1})*/

		res
			.status(200)
			.json(
				responseFormat.build(
					user,
					"User updated successfully",
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