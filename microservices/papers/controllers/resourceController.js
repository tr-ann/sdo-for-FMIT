import ResourceService from '../services/ResourceService'
import core from '../../../core'

class resourceController {

    async create(req, res) {
        try {
            let resource = await ResourceService.create({
                description:    req.body.description,
            })
            
            return res.status(201).json(core.ResponseFormat.build(
                resource,
                "Resource created successfully",
                201,
                "success"
            ))
        } catch (error) {
            return res.status(error.status).json(error)
        }
    }

    async readAll(req, res) {
        try {
            let resources = await ResourceService.readAll()
            
            return res.status(200).json(core.ResponseFormat.build(
                resources,
                "Resources read successfully",
                200,
                "success"
            ))
        } catch (error) {
            return res.status(error.status).json(error)
        }
    }

    async readById(req, res) {
        try {
            let resource = await ResourceService.readById(req.params.id)

            return res.status(200).json(core.ResponseFormat.build(
                resource,
                "Resource read successfully",
                200,
                "success"
            ))
        } catch (error) {
            return res.status(error.status).json(error)
        }
    }

    async update(req, res) {
        try {
            let resource = await ResourceService.update(req.params.id, {
                description:    req.body.description,
            })

            return res.status(200).json(core.ResponseFormat.build(
                resource,
                "Resource updated successfully",
                200,
                "success"
            ))
        } catch (error) {
            return res.status(error.status).json(error)
        }
    }

    async destroy(req, res) {
        try {
            await ResourceService.destroy(req.params.id)

            return res.status(200).json(core.ResponseFormat.build(
                {},
                "Resource deleted successfully",
                200,
                "success"
            ))
        } catch (error) {
            return res.status(error.status).json(error)
        }
    }
}

export default new resourceController()