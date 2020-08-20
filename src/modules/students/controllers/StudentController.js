const StudentService = require('../services/StudentService');
const { responseFormat } = require('../../../helpers');

class StudentController {

	async create(req, res, next) {

		let student = await StudentService.create(req.body);

		res
			.status(201)
			.json(
				responseFormat.build(
					{
						id: student.id,
						recordBook: student.recordBook 
					}, 
					"Student created successfully", 
					201, 
					"success"
				)
			);
	}

	async readAll(req, res, next) {
		let students = await StudentService.readAll();

		res
			.status(200)
			.json(
				responseFormat.build(
					students,
					"Students read successfully",
					200,
					"success"
				)
			);
	}

	async readById(req, res, next) {
		let student = await StudentService.findById(req.params.id);

		res
			.status(200)
			.json(
				responseFormat.build(
					student,
					"Student read successfully",
					200,
					"success"
				)
			);
	}
	
	async update(req, res, next) {
		let student = await StudentService.update(req.params.id, req.body);

		res
			.status(200)
			.json(
				responseFormat.build(
					student,
					"Student updated successfully",
					200,
					"success"
				)
			);
	}
	
	async destroy (req, res, next) {		
		let id = await StudentService.destroy(req.params.id);

		res
			.status(200)
			.json(
				responseFormat.build(
					{ studentId: id },
					"Student deleted successfully",
					200,
					"success"
				)
			);
	}
}

module.exports = new StudentController();