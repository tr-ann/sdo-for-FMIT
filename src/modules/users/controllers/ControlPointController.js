import ControlPointService from '../services/ControlPointService'
import helpers from '../../../helpers'

class ControlPointController {

    async create(req, res, next) {
        try {
            let controlPoint = await ControlPointService.create({
                url:    req.body.url,
                method: req.body.method,
            })

            return res.status(201).json(helpers.ResponseFormat.build(
                controlPoint,
                "Control point created successfully",
                201,
                "success"
            ))
        } catch (error) {
            next(error)
        }
    }

    async readAll(req, res, next) {
        try {
            let controlPoints = await ControlPointService.readAll()
            
            return res.status(200).json(helpers.ResponseFormat.build(
                controlPoints,
                "Control points read successfully",
                200,
                "success"
            ))
        } catch (error) {
            next(error)
        }
    }

    async readById(req, res, next) {
        try {
            let controlPoint = await ControlPointService.readById(req.params.id)

            return res.status(200).json(helpers.ResponseFormat.build(
                controlPoint,
                "Control point read successfully",
                200,
                "success"
            ))
        } catch (error) {
            next(error)
        }
    }

    async update(req, res, next) {
        try {
            let controlPoint = await ControlPointService.update(req.params.id, {
                url:    req.body.url,
                method: req.body.method,
            })

            return res.status(200).json(helpers.ResponseFormat.build(
                controlPoint,
                "Control point updated successfully",
                200,
                "success"
            ))
        } catch (error) {
            next(error)
        }
    }

    async destroy(req, res, next) {
        try {
            await ControlPointService.destroy(req.params.id)

            return res.status(200).json(helpers.ResponseFormat.build(
                {},
                "Control point deleted successfully",
                200,
                "success"
            ))
        } catch (error) {
            next(error)
        }
    }
}

export default new ControlPointController()