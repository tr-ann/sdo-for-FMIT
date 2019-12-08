import ResourceService from '../services/ResourceService'
import helpers from '../../../helpers'

class resourceController {

    async create(req, res, next) {
        try {
            let resource = await ResourceService.create({
                description:    req.body.description,
            })
            
            return res.status(201).json(helpers.ResponseFormat.build(
                resource,
                "Resource created successfully",
                201,
                "success"
            ))
        } catch (error) {
             next(error)
        }
    }

    async readAll(req, res, next) {
        try {
            let resources = await ResourceService.readAll()
            
            return res.status(200).json(helpers.ResponseFormat.build(
                resources,
                "Resources read successfully",
                200,
                "success"
            ))
        } catch (error) {
             next(error)
        }
    }

    async readById(req, res, next) {
        try {
            let resource = await ResourceService.readById(req.params.id)

            return res.status(200).json(helpers.ResponseFormat.build(
                resource,
                "Resource read successfully",
                200,
                "success"
            ))
        } catch (error) {
             next(error)
        }
    }

    async update(req, res, next) {
        try {
            let resource = await ResourceService.update(req.params.id, {
                description:    req.body.description,
            })

            return res.status(200).json(helpers.ResponseFormat.build(
                resource,
                "Resource updated successfully",
                200,
                "success"
            ))
        } catch (error) {
             next(error)
        }
    }

    async destroy(req, res, next) {
        try {
            await ResourceService.destroy(req.params.id)

            return res.status(200).json(helpers.ResponseFormat.build(
                {},
                "Resource deleted successfully",
                200,
                "success"
            ))
        } catch (error) {
             next(error)
        }
    }
}

export default new resourceController()