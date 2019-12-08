import OrganizationService from '../services/OrganizationService'
import helpers from '../../../helpers'

class organizationController {

    async create(req, res, next) {
        try {
            let organization = await OrganizationService.create({
                name: req.body.name,
            })
            
            return res.status(201).json(helpers.ResponseFormat.build(
                organization,
                "Organization created successfully",
                201,
                "success"
            ))
        } catch (error) {
            next(error)
        }
    }

    async readAll(req, res, next) {
        try {
            let organizations = await OrganizationService.readAll()
            
            return res.status(200).json(helpers.ResponseFormat.build(
                organizations,
                "Organizations read successfully",
                200,
                "success"
            ))
        } catch (error) {
            next(error)
        }
    }

    async readById(req, res, next) {
        try {
            let organization = await OrganizationService.readById(req.params.id)

            return res.status(200).json(helpers.ResponseFormat.build(
                organization,
                "Organization read successfully",
                200,
                "success"
            ))
        } catch (error) {
            next(error)
        }
    }

    async update(req, res, next) {
        try {
            let organization = await OrganizationService.update(req.params.id, {
                name:   req.body.name,
            })

            return res.status(200).json(helpers.ResponseFormat.build(
                organization,
                "Organization updated successfully",
                200,
                "success"
            ))
        } catch (error) {
            next(error)
        }
    }

    async destroy(req, res, next) {
        try {
            await OrganizationService.destroy(req.params.id)

            return res.status(200).json(helpers.ResponseFormat.build(
                {},
                "Organization deleted successfully",
                200,
                "success"
            ))
        } catch (error) {
            next(error)
        }
    }
}

export default new organizationController()