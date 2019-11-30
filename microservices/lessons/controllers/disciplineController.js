import DisciplineService from '../services/DisciplineService'
import core from '../../../core'

export default class disciplineController {

    _disciplinesService = new DisciplineService()

    async create(req, res) {
        try {
            let discipline = await this._disciplinesService.create({
                name:       req.body.name,
                shotr_name: req.body.shotr_name,
            })
            
            return res.status(201).json(core.ResponseFormat.build(
                discipline,
                "Discipline created successfully",
                201,
                "success"
            ))
        } catch (error) {
            return res.status(error.status).json(error)
        }
    }

    async readAll(req, res) {
        try {
            let disciplines = await this._disciplinesService.readAll()
            
            return res.status(200).json(core.ResponseFormat.build(
                disciplines,
                "Disciplines read successfully",
                200,
                "success"
            ))
        } catch (error) {
            return res.status(error.status).json(error)
        }
    }

    async readById(req, res) {
        try {
            let discipline = await this._disciplinesService.readById(req.params.id)

            return res.status(200).json(core.ResponseFormat.build(
                discipline,
                "Discipline read successfully",
                200,
                "success"
            ))
        } catch (error) {
            return res.status(error.status).json(error)
        }
    }

    async update(req, res) {
        try {
            let discipline = await this._disciplinesService.update(req.params.id, {
                name:       req.body.name,
                shotr_name: req.body.shotr_name,
            })

            return res.status(200).json(core.ResponseFormat.build(
                discipline,
                "Discipline updated successfully",
                200,
                "success"
            ))
        } catch (error) {
            return res.status(error.status).json(error)
        }
    }

    async destroy(req, res) {
        try {
            await this._disciplinesService.destroy(req.params.id)

            return res.status(200).json(core.ResponseFormat.build(
                {},
                "Discipline deleted successfully",
                200,
                "success"
            ))
        } catch (error) {
            return res.status(error.status).json(error)
        }
    }
}
