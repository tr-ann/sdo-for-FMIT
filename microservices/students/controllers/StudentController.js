import StudentService from '../services/StudentService'

const ResponseFormat = require('../../../core').ResponseFormat;

class StudentController {

    async create(req, res) {
        try {
            const student = await StudentService.create({
                full_name:          req.body.full_name,
                short_name:         req.body.short_name,
                group_id:           req.body.group_id,
                record_book:        req.body.record_book,
            });
            return res.status(201)
                .json(
                    ResponseFormat.build(
                        student, 
                        "Student created successfully", 
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
            let students = await StudentService.readAll()
            return res.status(200)
                .json(
                    ResponseFormat.build(
                        students,
                        "Students read successfully",
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
            let student = StudentService.findById(req.params.id)
            return res.status(200)
                .json(
                    ResponseFormat.build(
                        student,
                        "Student read successfully",
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
            let student = await StudentService.update(
                req.params.id, {
                    full_name:          req.body.full_name,
                    short_name:         req.body.short_name,
                    group_id:           req.body.group_id,
                    record_book:        req.body.record_book,
                }
            )
            return res.status(200)
                .json(
                    ResponseFormat.build(
                        usr,
                        "Student updated successfully",
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
            await StudentService.destroy(req.params.id)
            return res.status(200)
                .json(
                    ResponseFormat.build(
                        {},
                        "Student deleted successfully",
                        200,
                        "success"
                    )
                )
        } catch (error) { 
            res.status(error.status).json(error)
        }
    }
}
export default new StudentController()