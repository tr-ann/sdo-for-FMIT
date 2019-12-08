import GraduationPaperService from '../services/GraduationPaperService'
import helpers from '../../../helpers'

class graduationPaperController {

    async create(req, res, next) {
        try {
            let graduationPaper = await GraduationPaperService.create({
                student_id:     req.body.student_id,
                teacher_id:     req.body.teacher_id,
                status_id:      req.body.status_id,
                topic:          req.body.topic,
                name:           req.body.name,
                description:    req.body.description,
                resource_id:    req.body.resource_id,
            })
            
            return res.status(201).json(helpers.ResponseFormat.build(
                graduationPaper,
                "Graduation paper created successfully",
                201,
                "success"
            ))
        } catch (error) {
            next(error)
        }
    }

    async readAll(req, res, next) {
        try {
            let graduationPapers = await GraduationPaperService.readAll()
            
            return res.status(200).json(helpers.ResponseFormat.build(
                graduationPapers,
                "Graduation papers read successfully",
                200,
                "success"
            ))
        } catch (error) {
            next(error)
        }
    }

    async readById(req, res, next) {
        try {
            let graduationPaper = await GraduationPaperService.readById(req.params.id)

            return res.status(200).json(helpers.ResponseFormat.build(
                graduationPaper,
                "Graduation paper read successfully",
                200,
                "success"
            ))
        } catch (error) {
            next(error)
        }
    }

    async update(req, res, next) {
        try {
            let graduationPaper = await GraduationPaperService.update(req.params.id, {
                student_id:     req.body.student_id,
                teacher_id:     req.body.teacher_id,
                status_id:      req.body.status_id,
                topic:          req.body.topic,
                name:           req.body.name,
                description:    req.body.description,
                resource_id:    req.body.resource_id,
            })

            return res.status(200).json(helpers.ResponseFormat.build(
                graduationPaper,
                "Graduation paper updated successfully",
                200,
                "success"
            ))
        } catch (error) {
            next(error)
        }
    }

    async destroy(req, res, next) {
        try {
            await GraduationPaperService.destroy(req.params.id)

            return res.status(200).json(helpers.ResponseFormat.build(
                {},
                "Graduation paper deleted successfully",
                200,
                "success"
            ))
        } catch (error) {
            next(error)
        }
    }
}

export default new graduationPaperController()