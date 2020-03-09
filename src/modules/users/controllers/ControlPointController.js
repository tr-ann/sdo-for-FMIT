const ControlPointService = require('../services/ControlPointService');
const { responseFormat } = require('../../../helpers');

class ControlPointController {

	async create(req, res, next) {

		let controlPoint = await ControlPointService.create({
			url: req.body.url,
			method: req.body.method,
    });
    
    await controlPoint.setRoles(req.body.roleIds);

		res
			.status(201)
			.json(
				responseFormat.build(
					controlPoint,
					'Control point created successfully',
					201,
					'success'
				)
			);
	}

	async readAll(req, res, next) {

		let controlPoints = await ControlPointService.readAll();
		
		res
			.status(200)
			.json(
				responseFormat.build(
					controlPoints,
					'Control points read successfully',
					200,
					'success'
				)
			);
	}

	async readById(req, res, next) {

		let controlPoint = await ControlPointService.readById(req.params.id)

		res
			.status(200)
			.json(
				responseFormat.build(
					controlPoint,
					'Control point read successfully',
					200,
					'success'
				)
			);
	}

	async update(req, res, next) {

		let controlPoint = await ControlPointService.update(
      req.params.id,
      {
        url: req.body.url,
        method: req.body.method,
      }
    );
    
    await controlPoint.setRoles(req.body.roleIds);

		res
			.status(200)
			.json(
				responseFormat.build(
				controlPoint,
				'Control point updated successfully',
				200,
				'success'
				)
			);
	}

	async destroy(req, res, next) {

		await ControlPointService.destroy(req.params.id);

		res
			.status(200)
			.json(
				responseFormat.build(
					{},
					'Control point deleted successfully',
					200,
					'success'
				)
			);
	}
}

module.exports = new ControlPointController();