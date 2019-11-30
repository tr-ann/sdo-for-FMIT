import OrganizationService from '../services/OrganizationService'
import core from '../../../core'

export default class organizationController {

    _organizationService = new OrganizationService()

    async create(req, res) {
        try {
            let organization = await this._organizationService.create({
                name: req.body.name,
            })
            
            return res.status(201).json(core.ResponseFormat.build(
                organization,
                "Organization created successfully",
                201,
                "success"
            ))
        } catch (error) {
            return res.status(error.status).json(error)
        }
    }

    async readAll(req, res) {
        try {
            let organizations = await this._organizationService.readAll()
            
            return res.status(200).json(core.ResponseFormat.build(
                organizations,
                "Organizations read successfully",
                200,
                "success"
            ))
        } catch (error) {
            return res.status(error.status).json(error)
        }
    }

    async readById(req, res) {
        try {
            let organization = await this._organizationService.readById(req.params.id)

            return res.status(200).json(core.ResponseFormat.build(
                organization,
                "Organization read successfully",
                200,
                "success"
            ))
        } catch (error) {
            return res.status(error.status).json(error)
        }
    }

    async update(req, res) {
        try {
            let organization = await this._organizationService.update(req.params.id, {
                name:   req.body.name,
            })

            return res.status(200).json(core.ResponseFormat.build(
                organization,
                "Organization updated successfully",
                200,
                "success"
            ))
        } catch (error) {
            return res.status(error.status).json(error)
        }
    }

    async destroy(req, res) {
        try {
            await this._organizationService.destroy(req.params.id)

            return res.status(200).json(core.ResponseFormat.build(
                {},
                "Organization deleted successfully",
                200,
                "success"
            ))
        } catch (error) {
            return res.status(error.status).json(error)
        }
    }
}