import OrganizationService from '../services/OrganizationService'
import core from '../../../core'

class organizationController {

    async create(req, res) {
        try {
            let organization = await OrganizationService.create({
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
            let organizations = await OrganizationService.readAll()
            
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
            let organization = await OrganizationService.readById(req.params.id)

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
            let organization = await OrganizationService.update(req.params.id, {
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
            await OrganizationService.destroy(req.params.id)

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

export default new organizationController()