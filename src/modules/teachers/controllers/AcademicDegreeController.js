const AcademicDegreeService = require('../services/AcademicDegreeService');
const { responseFormat } = require('../../../helpers');

class AcademicDegreeController {

	async create(req, res, next) {

		let academicDegree = await AcademicDegreeService.create({
			name: req.body.name
		});
		
		res
			.status(201)
			.json(
				responseFormat.build(
					{ id: academicDegree.id }, 
					"Academic degree created successfully", 
					201, 
					"success"
				)
			);
	}

	async readAll(req, res, next) {

		let academicDegrees = await AcademicDegreeService.readAll();

		res
			.status(200)
			.json(
				responseFormat.build(
					academicDegrees,
					"Academic degrees read successfully",
					200,
					"success"
				)
			);
	}

	async readById(req, res, next) {

		let academicDegree = await AcademicDegreeService.findById(req.params.id);
		
		res
			.status(200)
			.json(
				responseFormat.build(
					academicDegree,
					"Academic degree read successfully",
					200,
					"success"
				)
			);
	}
	
	async update(req, res, next) {

		let academicDegree = await AcademicDegreeService.update(req.params.id, {
			name: req.body.name
		});

		res
			.status(200)
			.json(
				responseFormat.build(
					academicDegree,
					"Academic degree updated successfully",
					200,
					"success"
				)
			);
	}
	
	async destroy (req, res, next) {
		await AcademicDegreeService.destroy(req.params.id);

		res
			.status(200)
			.json(
				responseFormat.build(
					{},
					"Academic degree deleted successfully",
					200,
					"success"
				)
			);
	}
}

module.exports = new AcademicDegreeController();