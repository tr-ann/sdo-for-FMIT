import TeacherService from '../services/TeacherService'

import { ResponseFormat } from '../../../core'

class TeacherController {

    async create(req, res) {
        try {
            const teacher = await TeacherService.create({
                full_name:          req.body.full_name,
                short_name:         req.body.short_name,
                department_id:      req.body.department_id,
                position_id:        req.body.position_id,
                academic_degree_id: req.body.academic_degree_id,
                academic_rank_id:   req.body.academic_rank_id,
            });
            return res.status(201)
                .json(
                    ResponseFormat.build(
                        teacher, 
                        "Teacher created successfully", 
                        201, 
                        "success"
                    )
                )
        } catch (error) {
            return res.status(error.status).json(error);
        }
    }

    async readAll(req, res) {
        try {
            let teachers = await TeacherService.readAll()
            return res.status(200)
                .json(
                    ResponseFormat.build(
                        teachers,
                        "Teachers read successfully",
                        200,
                        "success"
                    )
                )
        } catch(error) {
            return res.status(error.status).json(error)
        }
    }

    async readById(req, res) {
        try {
            let teacher = TeacherService.findById(req.params.id)
            return res.status(200)
                .json(
                    ResponseFormat.build(
                        teacher,
                        "Teacher read successfully",
                        200,
                        "success"
                    )
                )
        } catch (error) {
            return res.status(error.status).json(error)
        }
    }
    
    async update(req, res) {
        try {
            let teacher = await TeacherService.update(req.params.id, {
                full_name:          req.body.full_name,
                short_name:         req.body.short_name,
                department_id:      req.body.department_id,
                position_id:        req.body.position_id,
                academic_degree_id: req.body.academic_degree_id,
                academic_rank_id:   req.body.academic_rank_id,
            })
            return res.status(200)
                .json(
                    ResponseFormat.build(
                        teacher,
                        "Teacher updated successfully",
                        200,
                        "success"
                    )
                )
        } catch(error) {
             res.status(error.status).json(error)
        }
    }
    
    async destroy (req, res) {
        try {
            await TeacherService.delete(req.params.id)
            return res.status(200)
                .json(
                    ResponseFormat.build(
                        {},
                        "Teacher deleted successfully",
                        200,
                        "success"
                    )
                )
        } catch (error) { 
            res.status(error.status).json(error)
        }
    }
}

export default new TeacherController()