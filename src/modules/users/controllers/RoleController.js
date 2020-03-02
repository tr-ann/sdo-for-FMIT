const RoleService = require('../services/RoleService');

const { responseFormat } = require('../../../helpers');

class RoleController {

	async create(req, res, next) {
		let role = await RoleService.create({
			name: req.body.name
		});

		res
			.status(201)
			.json(
				responseFormat.build(
					role, 
					"Role created successfully", 
					201, 
					"success"
				)
			);
	}

	async readAll(req, res, next) {
		let roles = await RoleService.readAll();
		
		res
			.status(200)
			.json(
				responseFormat.build(
					roles,
					"Roles read successfully",
					200,
					"success"
				)
			);
	}

	async readById(req, res, next) {
		let role = RoleService.findById(req.params.id);

		res
			.status(200)
			.json(
				responseFormat.build(
					role,
					"Role read successfully",
					200,
					"success"
				)
			);
	}
	
	async update(req, res, next) {
		let role = await RoleService.update(req.params.id, {
			name: req.body.name,
		});

		res
			.status(200)
			.json(
				responseFormat.build(
					role,
					"Role updated successfully",
					200,
					"success"
				)
			);
	}
	
	async destroy (req, res, next) {
		await RoleService.destroy(req.params.id);

		res
			.status(200)
			.json(
				responseFormat.build(
					{},
					"Role deleted successfully",
					200,
					"success"
				)
			);
	}
}

export default new RoleController()