import TeacherService from '../services/TeacherService'

import { ResponseFormat } from '../../../helpers'

class TeacherController {

	async create(req, res, next) {
		let teacher = await TeacherService.create({
			user_id:            req.body.user_id,
			department_id:      req.body.department_id,
			position_id:        req.body.position_id,
			academic_degree_id: req.body.academic_degree_id,
			academic_rank_id:   req.body.academic_rank_id,
		});
		
		res
			.status(201)
			.json(
				ResponseFormat.build(
					teacher,
					"Teacher created successfully",
					201,
					"success"
				)
			);
	}

	async readAll(req, res, next) {
			let teachers = await TeacherService.readAll();

			res
				.status(200)
				.json(
					ResponseFormat.build(
						teachers,
						"Teachers read successfully",
						200,
						"success"
					)
				);
	}

	async readById(req, res, next) {
		let teacher = TeacherService.findById(req.params.id);

		res
			.status(200)
			.json(
				ResponseFormat.build(
					teacher,
					"Teacher read successfully",
					200,
					"success"
				)
			);
	}
	
	async update(req, res, next) {
		let teacher = await TeacherService.update(req.params.id, {
			full_name:          req.body.full_name,
			short_name:         req.body.short_name,
			department_id:      req.body.department_id,
			position_id:        req.body.position_id,
			academic_degree_id: req.body.academic_degree_id,
			academic_rank_id:   req.body.academic_rank_id,
		});

		res
			.status(200)
			.json(
				ResponseFormat.build(
					teacher,
					"Teacher updated successfully",
					200,
					"success"
				)
			);
	}
	
	async destroy (req, res, next) {
		await TeacherService.delete(req.params.id);

		res
			.status(200)
			.json(
				ResponseFormat.build(
					{},
					"Teacher deleted successfully",
					200,
					"success"
				)
			);
	}
	
}

module.exports = new TeacherController();