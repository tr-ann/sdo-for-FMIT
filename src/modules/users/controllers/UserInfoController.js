const UserInfoService = require('../services/UserInfoService');

const { responseFormat } = require('../../../helpers');

class UserInfoController {

	async create(req, res, next) {
		let userInfo = await UserInfoService.create({
			fullName: req.body.fullName,
			description: req.body.description,
			birthday: req.body.birthday,
			city: req.body.city,
			address: req.body.address,
		});

		res
			.status(201)
			.json(
				responseFormat.build(
					userInfo, 
					"UserInfo created successfully", 
					201, 
					"success"
				)
			);
	}

	async readAll(req, res, next) {
		let userInfos = await UserInfoService.all();

		res
			.status(200)
			.json(
				responseFormat.build(
					userInfos,
					"UserInfos read successfully",
					200,
					"success"
				)
			);
	}

	async readById(req, res, next) {
		let userInfo = UserInfoService.findById(req.params.id);

		res
			.status(200)
			.json(
				responseFormat.build(
					userInfo,
					"UserInfo read successfully",
					200,
					"success"
				)
			);
	}
	
	async update(req, res, next) {
		let userInfo = await UserInfoService.update(req.params.id, {
			fullName: req.body.fullName,
			description: req.body.description,
			birthday: req.body.birthday,
			city: req.body.city,
			address: req.body.address,
		});

		res
			.status(200)
			.json(
				responseFormat.build(
					userInfo,
					"UserInfo updated successfully",
					200,
					"success"
				)
			);
	}
	
	async destroy (req, res, next) {
		await UserInfoService.delete(req.params.id);

		res
			.status(200)
			.json(
				responseFormat.build(
					{},
					"UserInfo deleted successfully",
					200,
					"success"
				)
			);
	}
}

module.exports = new UserInfoController();