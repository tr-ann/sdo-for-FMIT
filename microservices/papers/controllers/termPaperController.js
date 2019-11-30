import TermPaperService from '../services/TermPaperService'
import core from '../../../core'

class termPaperController {

    async create(req, res) {
        try {
            let termPaper = await TermPaperService.create({
                student_id:     req.body.student_id,
                teacher_id:     req.body.teacher_id,
                status_id:      req.body.status_id,
                topic:          req.body.topic,
                name:           req.body.name,
                description:    req.body.description,
                resource_id:    req.body.resource_id,
            })
            
            return res.status(201).json(core.ResponseFormat.build(
                termPaper,
                "Term paper created successfully",
                201,
                "success"
            ))
        } catch (error) {
            return res.status(error.status).json(error)
        }
    }

    async readAll(req, res) {
        try {
            let termPapers = await TermPaperService.readAll()
            
            return res.status(200).json(core.ResponseFormat.build(
                termPapers,
                "Term papers read successfully",
                200,
                "success"
            ))
        } catch (error) {
            return res.status(error.status).json(error)
        }
    }

    async readById(req, res) {
        try {
            let termPaper = await TermPaperService.readById(req.params.id)

            return res.status(200).json(core.ResponseFormat.build(
                termPaper,
                "Term paper read successfully",
                200,
                "success"
            ))
        } catch (error) {
            return res.status(error.status).json(error)
        }
    }

    async update(req, res) {
        try {
            let termPaper = await TermPaperService.update(req.params.id, {
                student_id:     req.body.student_id,
                teacher_id:     req.body.teacher_id,
                status_id:      req.body.status_id,
                topic:          req.body.topic,
                name:           req.body.name,
                description:    req.body.description,
                resource_id:    req.body.resource_id,
            })

            return res.status(200).json(core.ResponseFormat.build(
                termPaper,
                "Term paper updated successfully",
                200,
                "success"
            ))
        } catch (error) {
            return res.status(error.status).json(error)
        }
    }

    async destroy(req, res) {
        try {
            await TermPaperService.destroy(req.params.id)

            return res.status(200).json(core.ResponseFormat.build(
                {},
                "Term paper deleted successfully",
                200,
                "success"
            ))
        } catch (error) {
            return res.status(error.status).json(error)
        }
    }
}

export default new termPaperController()