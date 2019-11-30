import StatusService from '../services/StatusService'
import core from '../../../core'

export default class statusController {

    _statusService = new StatusService()

    async create(req, res) {
        try {
            let status = await this._statusService.create({
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
            let statuses = await this._statusService.readAll()
            
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
            let status = await this._statusService.readById(req.params.id)

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
            let status = await this._statusService.update(req.params.id, {
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
            await this._statusService.destroy(req.params.id)

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
