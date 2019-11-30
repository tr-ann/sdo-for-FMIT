import DisciplineService from '../services/DisciplineService'
import core from '../../../core'

class disciplineController {

    async create(req, res) {
        try {
            let discipline = await DisciplineService.create({
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
            let disciplines = await DisciplineService.readAll()
            
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
            let discipline = await DisciplineService.readById(req.params.id)

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
            let discipline = await DisciplineService.update(req.params.id, {
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
            await DisciplineService.destroy(req.params.id)

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

export default new disciplineController()