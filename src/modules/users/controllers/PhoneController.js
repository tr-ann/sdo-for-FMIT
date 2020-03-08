const PhoneService = require('../services/PhoneService');
const { responseFormat } = require('../../../helpers');

class PhoneController {

	async create(req, res, next) {
		const phone = await PhoneService.create({
			phone: req.body.phone
		});
		
		res
			.status(201)
			.json(
				responseFormat.build(
					phone, 
					"Phone created successfully", 
					201, 
					"success"
				)
			);
	}

	async readAll(req, res, next) {
		let phones = await PhoneService.all();
		
		res
			.status(200)
			.json(
				responseFormat.build(
					phones,
					"Phones read successfully",
					200,
					"success"
				)
			);
	}

	async readById(req, res, next) {
		let phone = PhoneService.findById(req.params.id);
		
		res
			.status(200)
			.json(
				responseFormat.build(
					phone,
					"Phone read successfully",
					200,
					"success"
				)
			);
	}
	
	async update(req, res, next) {
		let phone = await PhoneService.update(req.params.id, {
			phone: req.body.phone,
		});

		res
			.status(200)
			.json(
				responseFormat.build(
					phone,
					"Phone updated successfully",
					200,
					"success"
				)
			);
	}
	
	async destroy (req, res, next) {
		await PhoneService.delete(req.params.id);
		
		res
			.status(200)
			.json(
				responseFormat.build(
					{},
					"Phone deleted successfully",
					200,
					"success"
				)
			);
	}
}

module.exports = new PhoneController();