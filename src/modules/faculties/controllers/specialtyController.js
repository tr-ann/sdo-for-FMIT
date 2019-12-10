import SpecialtyService from '../services/SpecialtyService'
import helpers from '../../../helpers'

class specialtyController {

    async create(req, res, next) {
        try {
            let specialty = await SpecialtyService.create({
                code: req.body.code,
                name: req.body.name,
                short_name: req.body.short_name,
            })
            
            return res.status(201).json(helpers.ResponseFormat.build(
                specialty,
                "Specialty created successfully",
                201,
                "success"
            ))
        } catch (error) {
             next(error)
        }
    }

    async readAll(req, res, next) {
        try {
            let specialties = await SpecialtyService.readAll()
            
            return res.render("specialtiesList", {specialties})

            // return res.status(200).json(helpers.ResponseFormat.build(
            //     specialties,
            //     "Specialtys read successfully",
            //     200,
            //     "success"
            // ))
        } catch (error) {
             next(error)
        }
    }

    async readById(req, res, next) {
        try {
            let specialty = await SpecialtyService.readById(req.params.id)

            return res.status(200).json(helpers.ResponseFormat.build(
                specialty,
                "Specialty read successfully",
                200,
                "success"
            ))
        } catch (error) {
             next(error)
        }
    }

    async update(req, res, next) {
        try {
            let specialty = await SpecialtyService.update(req.params.id, {
                code: req.body.code,
                name: req.body.name,
                short_name: req.body.short_name,
            })

            return res.status(200).json(helpers.ResponseFormat.build(
                specialty,
                "Specialty updated successfully",
                200,
                "success"
            ))
        } catch (error) {
             next(error)
        }
    }

    async destroy(req, res, next) {
        try {
            await SpecialtyService.destroy(req.params.id)

            return res.status(200).json(helpers.ResponseFormat.build(
                {},
                "Specialty deleted successfully",
                200,
                "success"
            ))
        } catch (error) {
             next(error)
        }
    }
}

export default new specialtyController()