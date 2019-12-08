import StatusService from '../services/StatusService'
import helpers from '../../../helpers'

class statusController {

    async create(req, res, next) {
        try {
            let status = await StatusService.create({
                name:   req.body.name,
            })
            
            return res.status(201).json(helpers.ResponseFormat.build(
                status,
                "Status created successfully",
                201,
                "success"
            ))
        } catch (error) {
            next(error)
        }
    }

    async readAll(req, res, next) {
        try {
            let statuses = await StatusService.readAll()
            
            return res.status(200).json(helpers.ResponseFormat.build(
                statuses,
                "Statuses read successfully",
                200,
                "success"
            ))
        } catch (error) {
            next(error)
        }
    }

    async readById(req, res, next) {
        try {
            let status = await StatusService.readById(req.params.id)

            return res.status(200).json(helpers.ResponseFormat.build(
                status,
                "Status read successfully",
                200,
                "success"
            ))
        } catch (error) {
            next(error)
        }
    }

    async update(req, res, next) {
        try {
            let status = await StatusService.update(req.params.id, {
                name:   req.body.name,
            })

            return res.status(200).json(helpers.ResponseFormat.build(
                status,
                "Status updated successfully",
                200,
                "success"
            ))
        } catch (error) {
            next(error)
        }
    }

    async destroy(req, res, next) {
        try {
            await StatusService.destroy(req.params.id)

            return res.status(200).json(helpers.ResponseFormat.build(
                {},
                "Status deleted successfully",
                200,
                "success"
            ))
        } catch (error) {
            next(error)
        }
    }
}

export default new statusController()