import PracticeTypeService from '../services/PracticeTypeService'
import core from '../../../core'

class practiceTypeController {

    async create(req, res, next) {
        try {
            let practiceType = await PracticeTypeService.create({
                name: req.body.name,
            })
            
            return res.status(201).json(core.ResponseFormat.build(
                practiceType,
                "Practice type created successfully",
                201,
                "success"
            ))
        } catch (error) {
            next(error)
        }
    }

    async readAll(req, res, next) {
        try {
            let practiceTypes = await PracticeTypeService.readAll()
            
            return res.status(200).json(core.ResponseFormat.build(
                practiceTypes,
                "Practice types read successfully",
                200,
                "success"
            ))
        } catch (error) {
            next(error)
        }
    }

    async readById(req, res, next) {
        try {
            let practiceType = await PracticeTypeService.readById(req.params.id)

            return res.status(200).json(core.ResponseFormat.build(
                practiceType,
                "Practice type read successfully",
                200,
                "success"
            ))
        } catch (error) {
            next(error)
        }
    }

    async update(req, res, next) {
        try {
            let practiceType = await PracticeTypeService.update(req.params.id, {
                name:   req.body.name,
            })

            return res.status(200).json(core.ResponseFormat.build(
                practiceType,
                "Practice type updated successfully",
                200,
                "success"
            ))
        } catch (error) {
            next(error)
        }
    }

    async destroy(req, res, next) {
        try {
            await PracticeTypeService.destroy(req.params.id)

            return res.status(200).json(core.ResponseFormat.build(
                {},
                "Practice type deleted successfully",
                200,
                "success"
            ))
        } catch (error) {
            next(error)
        }
    }
}

export default new practiceTypeController()