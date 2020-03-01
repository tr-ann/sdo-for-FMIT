const StudentService = require('../services/StudentService');
const { responseFormat } = require('../../../helpers');

class StudentController {

	async create(req, res, next) {
		const student = await StudentService.create({
			full_name:          req.body.full_name,
			short_name:         req.body.short_name,
			group_id:           req.body.group_id,
			record_book:        req.body.record_book,
		});

		res
			.status(201)
			.json(
				responseFormat.build(
					student, 
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
		let student = await StudentService.update(
			req.params.id, {
				full_name:          req.body.full_name,
				short_name:         req.body.short_name,
				group_id:           req.body.group_id,
				record_book:        req.body.record_book,
			}
		);

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
		await StudentService.destroy(req.params.id);

		res
			.status(200)
			.json(
				responseFormat.build(
					{},
					"Student deleted successfully",
					200,
					"success"
				)
			);
	}
}

module.exports = new StudentController();