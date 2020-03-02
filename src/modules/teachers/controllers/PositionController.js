const PositionService = require('../services/PositionService');

const { responseFormat } = require('../../../helpers');

class PositionController {

	async create(req, res, next) {
		let position = await PositionService.create({
			name: req.body.name
		});

		res
			.status(201)
			.json(
				responseFormat.build(
					position, 
					"Position created successfully", 
					201, 
					"success"
				)
			);
	}

	async readAll(req, res, next) {
		let positions = await PositionService.readAll();

		res
			.status(200)
			.json(
				responseFormat.build(
					positions,
					"Positions read successfully",
					200,
					"success"
				)
			);
	}

	async readById(req, res, next) {
		let position = PositionService.findById(req.params.id);

		res
			.status(200)
			.json(
				responseFormat.build(
					position,
					"Position read successfully",
					200,
					"success"
				)
			);
	}
	
	async update(req, res, next) {
		let position = await PositionService.update(req.params.id, {
			name: req.body.name
		});

		res
			.status(200)
			.json(
				responseFormat.build(
					position,
					"Position updated successfully",
					200,
					"success"
				)
			);
	}
	
	async destroy (req, res, next) {
		await PositionService.delete(req.params.id);

		res
			.status(200)
			.json(
				responseFormat.build(
					{},
					"Position deleted successfully",
					200,
					"success"
				)
			);
	}

}

module.exports = new PositionController();