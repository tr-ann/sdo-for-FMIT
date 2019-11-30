import PracticeTypeService from '../services/PracticeTypeService'
import core from '../../../core'

export default class practiceTypeController {

    _practiceTypeService = new PracticeTypeService()

    async create(req, res) {
        try {
            let practiceType = await this._practiceTypeService.create({
                name: req.body.name,
            })
            
            return res.status(201).json(core.ResponseFormat.build(
                practiceType,
                "Practice type created successfully",
                201,
                "success"
            ))
        } catch (error) {
            return res.status(error.status).json(error)
        }
    }

    async readAll(req, res) {
        try {
            let practiceTypes = await this._practiceTypeService.readAll()
            
            return res.status(200).json(core.ResponseFormat.build(
                practiceTypes,
                "Practice types read successfully",
                200,
                "success"
            ))
        } catch (error) {
            return res.status(error.status).json(error)
        }
    }

    async readById(req, res) {
        try {
            let practiceType = await this._practiceTypeService.readById(req.params.id)

            return res.status(200).json(core.ResponseFormat.build(
                practiceType,
                "Practice type read successfully",
                200,
                "success"
            ))
        } catch (error) {
            return res.status(error.status).json(error)
        }
    }

    async update(req, res) {
        try {
            let practiceType = await this._practiceTypeService.update(req.params.id, {
                name:   req.body.name,
            })

            return res.status(200).json(core.ResponseFormat.build(
                practiceType,
                "Practice type updated successfully",
                200,
                "success"
            ))
        } catch (error) {
            return res.status(error.status).json(error)
        }
    }

    async destroy(req, res) {
        try {
            await this._practiceTypeService.destroy(req.params.id)

            return res.status(200).json(core.ResponseFormat.build(
                {},
                "Practice type deleted successfully",
                200,
                "success"
            ))
        } catch (error) {
            return res.status(error.status).json(error)
        }
    }
}
