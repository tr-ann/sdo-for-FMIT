import RequestService from '../services/RequestService'
import core from '../../../core'

class requestController {

    async create(req, res) {
        try {
            let request = await RequestService.create({
                student_id:     req.body.student_id,
                teacher_id:     req.body.teacher_id,
                status_id:      req.body.status_id,
                topic:          req.body.topic,
                name:           req.body.name,
                description:    req.body.description,
            })
            
            return res.status(201).json(core.ResponseFormat.build(
                request,
                "Request created successfully",
                201,
                "success"
            ))
        } catch (error) {
            return res.status(error.status).json(error)
        }
    }

    async readAll(req, res) {
        try {
            let requests = await RequestService.readAll()
            
            return res.status(200).json(core.ResponseFormat.build(
                requests,
                "Requests read successfully",
                200,
                "success"
            ))
        } catch (error) {
            return res.status(error.status).json(error)
        }
    }

    async readById(req, res) {
        try {
            let request = await RequestService.readById(req.params.id)

            return res.status(200).json(core.ResponseFormat.build(
                request,
                "Request read successfully",
                200,
                "success"
            ))
        } catch (error) {
            return res.status(error.status).json(error)
        }
    }

    async update(req, res) {
        try {
            let request = await RequestService.update(req.params.id, {
                student_id:     req.body.student_id,
                teacher_id:     req.body.teacher_id,
                status_id:      req.body.status_id,
                topic:          req.body.topic,
                name:           req.body.name,
                description:    req.body.description,
                update_date:    req.body.update_date,
            })

            return res.status(200).json(core.ResponseFormat.build(
                request,
                "Request updated successfully",
                200,
                "success"
            ))
        } catch (error) {
            return res.status(error.status).json(error)
        }
    }

    async destroy(req, res) {
        try {
            await RequestService.destroy(req.params.id)

            return res.status(200).json(core.ResponseFormat.build(
                {},
                "Request deleted successfully",
                200,
                "success"
            ))
        } catch (error) {
            return res.status(error.status).json(error)
        }
    }
}

export default new requestController()