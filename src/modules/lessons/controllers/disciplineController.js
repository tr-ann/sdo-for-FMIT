import DisciplineService from '../services/DisciplineService'
import helpers from '../../../helpers'

class disciplineController {

    async create(req, res, next) {
        try {
            let discipline = await DisciplineService.create({
                name:       req.body.name,
                shotr_name: req.body.shotr_name,
            })
            
            return res.status(201).json(helpers.ResponseFormat.build(
                discipline,
                "Discipline created successfully",
                201,
                "success"
            ))
        } catch (error) {
            next(error)
        }
    }

    async readAll(req, res, next) {
        try {
            let disciplines = await DisciplineService.readAll()
            
            return res.status(200).json(helpers.ResponseFormat.build(
                disciplines,
                "Disciplines read successfully",
                200,
                "success"
            ))
        } catch (error) {
            next(error)
        }
    }

    async readById(req, res, next) {
        try {
            let discipline = await DisciplineService.readById(req.params.id)

            return res.status(200).json(helpers.ResponseFormat.build(
                discipline,
                "Discipline read successfully",
                200,
                "success"
            ))
        } catch (error) {
            next(error)
        }
    }

    async update(req, res, next) {
        try {
            let discipline = await DisciplineService.update(req.params.id, {
                name:       req.body.name,
                shotr_name: req.body.shotr_name,
            })

            return res.status(200).json(helpers.ResponseFormat.build(
                discipline,
                "Discipline updated successfully",
                200,
                "success"
            ))
        } catch (error) {
            next(error)
        }
    }

    async destroy(req, res, next) {
        try {
            await DisciplineService.destroy(req.params.id)

            return res.status(200).json(helpers.ResponseFormat.build(
                {},
                "Discipline deleted successfully",
                200,
                "success"
            ))
        } catch (error) {
            next(error)
        }
    }
}

export default new disciplineController()