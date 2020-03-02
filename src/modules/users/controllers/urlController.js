const UrlService = require('../services/UrlService');
const RoleUrlService = require('../services/RoleUrlService');
const { responseFormat } = require('../../../helpers');

class urlController {

	async create(req, res, next) {
		let url = await UrlService.create({
			url: req.body.url,
		});
		
		await RoleUrlService.create({url_id: url.id, role_id: req.body.role_id});

		res
			.status(201)
			.json(
				responseFormat.build(
					url,
					"Url created successfully",
					201,
					"success"
				)
			);
	}

	async readAll(req, res, next) {
		let urls = await UrlService.readAll();
		
		res
			.status(200)
			.json(
				responseFormat.build(
					urls,
					"Urls read successfully",
					200,
					"success"
				)
			);
	}

	async readById(req, res, next) {
		let url = await UrlService.readById(req.params.id)

		res
			.status(200)
			.json(
				responseFormat.build(
					url,
					"Url read successfully",
					200,
					"success"
				)
			);
	}

	async update(req, res, next) {
		let url = await UrlService.update(req.params.id, {
			url:     req.body.url,
		});

		res
			.status(200)
			.json(
				responseFormat.build(
				url,
				"Url updated successfully",
				200,
				"success"
				)
			);
	}

	async destroy(req, res, next) {
		await UrlService.destroy(req.params.id);

		res
			.status(200)
			.json(
				responseFormat.build(
					{},
					"Url deleted successfully",
					200,
					"success"
				)
			);
	}
}

module.exports = new urlController();