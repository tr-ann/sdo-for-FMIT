import UrlService from '../services/UrlService'
import core from '../../../core'

class urlController {

    async create(req, res) {
        try {
            let url = await UrlService.create({
                url:     req.body.url,
            })
            
            return res.status(201).json(core.ResponseFormat.build(
                url,
                "Url created successfully",
                201,
                "success"
            ))
        } catch (error) {
            return res.status(error.status).json(error)
        }
    }

    async readAll(req, res) {
        try {
            let urls = await UrlService.readAll()
            
            return res.status(200).json(core.ResponseFormat.build(
                urls,
                "Urls read successfully",
                200,
                "success"
            ))
        } catch (error) {
            return res.status(error.status).json(error)
        }
    }

    async readById(req, res) {
        try {
            let url = await UrlService.readById(req.params.id)

            return res.status(200).json(core.ResponseFormat.build(
                url,
                "Url read successfully",
                200,
                "success"
            ))
        } catch (error) {
            return res.status(error.status).json(error)
        }
    }

    async update(req, res) {
        try {
            let url = await UrlService.update(req.params.id, {
                url:     req.body.url,
            })

            return res.status(200).json(core.ResponseFormat.build(
                url,
                "Url updated successfully",
                200,
                "success"
            ))
        } catch (error) {
            return res.status(error.status).json(error)
        }
    }

    async destroy(req, res) {
        try {
            await UrlService.destroy(req.params.id)

            return res.status(200).json(core.ResponseFormat.build(
                {},
                "Url deleted successfully",
                200,
                "success"
            ))
        } catch (error) {
            return res.status(error.status).json(error)
        }
    }
}

export default new urlController()