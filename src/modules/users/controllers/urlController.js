import UrlService from '../services/UrlService'
import helpers from '../../../helpers'

class urlController {

    async create(req, res, next) {
        try {
            let url = await UrlService.create({
                url:     req.body.url,
            })
            
            return res.status(201).json(helpers.ResponseFormat.build(
                url,
                "Url created successfully",
                201,
                "success"
            ))
        } catch (error) {
            next(error)
        }
    }

    async readAll(req, res, next) {
        try {
            let urls = await UrlService.readAll()
            
            return res.status(200).json(helpers.ResponseFormat.build(
                urls,
                "Urls read successfully",
                200,
                "success"
            ))
        } catch (error) {
            next(error)
        }
    }

    async readById(req, res, next) {
        try {
            let url = await UrlService.readById(req.params.id)

            return res.status(200).json(helpers.ResponseFormat.build(
                url,
                "Url read successfully",
                200,
                "success"
            ))
        } catch (error) {
            next(error)
        }
    }

    async update(req, res, next) {
        try {
            let url = await UrlService.update(req.params.id, {
                url:     req.body.url,
            })

            return res.status(200).json(helpers.ResponseFormat.build(
                url,
                "Url updated successfully",
                200,
                "success"
            ))
        } catch (error) {
            next(error)
        }
    }

    async destroy(req, res, next) {
        try {
            await UrlService.destroy(req.params.id)

            return res.status(200).json(helpers.ResponseFormat.build(
                {},
                "Url deleted successfully",
                200,
                "success"
            ))
        } catch (error) {
            next(error)
        }
    }
}

export default new urlController()