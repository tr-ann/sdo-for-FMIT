import StatusService from '../services/StatusService'
import core from '../../../core'

class statusController {

    async create(req, res) {
        try {
            let status = await StatusService.create({
                name:   req.body.name,
            })
            
            return res.status(201).json(core.ResponseFormat.build(
                status,
                "Status created successfully",
                201,
                "success"
            ))
        } catch (error) {
            return res.status(error.status).json(error)
        }
    }

    async readAll(req, res) {
        try {
            let statuses = await StatusService.readAll()
            
            return res.status(200).json(core.ResponseFormat.build(
                statuses,
                "Statuses read successfully",
                200,
                "success"
            ))
        } catch (error) {
            return res.status(error.status).json(error)
        }
    }

    async readById(req, res) {
        try {
            let status = await StatusService.readById(req.params.id)

            return res.status(200).json(core.ResponseFormat.build(
                status,
                "Status read successfully",
                200,
                "success"
            ))
        } catch (error) {
            return res.status(error.status).json(error)
        }
    }

    async update(req, res) {
        try {
            let status = await StatusService.update(req.params.id, {
                name:   req.body.name,
            })

            return res.status(200).json(core.ResponseFormat.build(
                status,
                "Status updated successfully",
                200,
                "success"
            ))
        } catch (error) {
            return res.status(error.status).json(error)
        }
    }

    async destroy(req, res) {
        try {
            await StatusService.destroy(req.params.id)

            return res.status(200).json(core.ResponseFormat.build(
                {},
                "Status deleted successfully",
                200,
                "success"
            ))
        } catch (error) {
            return res.status(error.status).json(error)
        }
    }
}

export default new statusController()