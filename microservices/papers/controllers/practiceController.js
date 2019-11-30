import PracticeService from '../services/PracticeService'
import core from '../../../core'

export default class practiceController {

    _practiceService = new PracticeService()

    async create(req, res) {
        try {
            let practice = await this._practiceService.create({
                student_id:         req.body.student_id,
                organization_id:    req.body.organization_id,
                status_id:          req.body.status_id,
                topic:              req.body.topic,
                name:               req.body.name,
                description:        req.body.description,
                start_date:         req.body.start_date,
                end_date:           req.body.end_date,
                resource_id:        req.body.resource_id,
                type_id:            req.body.type_id,
            })
            
            return res.status(201).json(core.ResponseFormat.build(
                practice,
                "Practice created successfully",
                201,
                "success"
            ))
        } catch (error) {
            return res.status(error.status).json(error)
        }
    }

    async readAll(req, res) {
        try {
            let practices = await this._practiceService.readAll()
            
            return res.status(200).json(core.ResponseFormat.build(
                practices,
                "Practices read successfully",
                200,
                "success"
            ))
        } catch (error) {
            return res.status(error.status).json(error)
        }
    }

    async readById(req, res) {
        try {
            let practice = await this._practiceService.readById(req.params.id)

            return res.status(200).json(core.ResponseFormat.build(
                practice,
                "Practice read successfully",
                200,
                "success"
            ))
        } catch (error) {
            return res.status(error.status).json(error)
        }
    }

    async update(req, res) {
        try {
            let practice = await this._practiceService.update(req.params.id, {
                student_id:         req.body.student_id,
                organization_id:    req.body.organization_id,
                status_id:          req.body.status_id,
                topic:              req.body.topic,
                name:               req.body.name,
                description:        req.body.description,
                start_date:         req.body.start_date,
                end_date:           req.body.end_date,
                resource_id:        req.body.resource_id,
                type_id:            req.body.type_id,
            })

            return res.status(200).json(core.ResponseFormat.build(
                practice,
                "Practice updated successfully",
                200,
                "success"
            ))
        } catch (error) {
            return res.status(error.status).json(error)
        }
    }

    async destroy(req, res) {
        try {
            await this._practiceService.destroy(req.params.id)

            return res.status(200).json(core.ResponseFormat.build(
                {},
                "Practice deleted successfully",
                200,
                "success"
            ))
        } catch (error) {
            return res.status(error.status).json(error)
        }
    }
}
