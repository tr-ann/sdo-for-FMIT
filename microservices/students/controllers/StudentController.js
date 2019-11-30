import StudentService from '../services/StudentService'
const studentService = new StudentService()

const ResponseFormat = require('../../../core').ResponseFormat;

export default class StudentController {

    async create(req, res) {
        try {
            const student = await studentService.create({
                login: req.body.username,
                password: req.body.password
            });
            return res.status(201)
                .json(ResponseFormat.build(
                    student, 
                    "student Create Successfully", 
                    201, 
                    "success")
                )
        } catch (error) {
            return res.status(error.status).json(error);
        }
    }

    async list(req, res) {
        try {
            let students = await studentService.all()
            return res.status(200)
                .json(ResponseFormat.build(
                    students,
                    "student Information Reterive successfully",
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
            let student = studentService.findById(req.params.id)
            return res.status(200)
            .json(ResponseFormat.build(
                    student,
                    "student information reterieve successfully",
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
            let student = await studentService.update(
                req.params.id, {
                    login: req.body.username,
                    password: req.body.password,
                }
            )
            return res.status(200)
                .json(ResponseFormat.build(
                    usr,
                    "student Update successfully",
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
            await studentService.destroy(req.params.id)
            return res.status(200)
                .json(ResponseFormat.build(
                    {},
                    "student deleted successfully",
                    200,
                    "success"
                )
            )
        } catch (error) { 
            res.status(error.status).json(error)
        }
    }
}