import PracticeService from '../services/PracticeService'
import helpers from '../../../helpers'

class practiceController {

    async create(req, res, next) {
        try {
            let practice = await PracticeService.create({
                student_id:         req.body.student_id,
                organization_id:    req.body.organization_id,
                status_id:          req.body.status_id,
                topic:              req.body.topic,
                name:               req.body.name,
                description:        req.body.description,
                start_date:         req.body.start_date,
                end_date:           req.body.end_date,
                resource_id:        req.body.resource_id,
                practice_type_id:   req.body.practice_type_id,
            })
            
            return res.status(201).json(helpers.ResponseFormat.build(
                practice,
                "Practice created successfully",
                201,
                "success"
            ))
        } catch (error) {
            next(error)
        }
    }

    async readAll(req, res, next) {
        try {
            let practices = await PracticeService.readAll()
            
            return res.status(200).json(helpers.ResponseFormat.build(
                practices,
                "Practices read successfully",
                200,
                "success"
            ))
        } catch (error) {
            next(error)
        }
    }

    async readById(req, res, next) {
        try {
            let practice = await PracticeService.readById(req.params.id)

            return res.status(200).json(helpers.ResponseFormat.build(
                practice,
                "Practice read successfully",
                200,
                "success"
            ))
        } catch (error) {
            next(error)
        }
    }

    async update(req, res, next) {
        try {
            let practice = await PracticeService.update(req.params.id, {
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

            return res.status(200).json(helpers.ResponseFormat.build(
                practice,
                "Practice updated successfully",
                200,
                "success"
            ))
        } catch (error) {
            next(error)
        }
    }

    async destroy(req, res, next) {
        try {
            await PracticeService.destroy(req.params.id)

            return res.status(200).json(helpers.ResponseFormat.build(
                {},
                "Practice deleted successfully",
                200,
                "success"
            ))
        } catch (error) {
            next(error)
        }
    }
}

export default new practiceController()