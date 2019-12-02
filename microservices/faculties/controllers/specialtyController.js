import SpecialtyService from '../services/SpecialtyService'
import core from '../../../core'

class specialtyController {

    async create(req, res) {
        try {
            let specialty = await SpecialtyService.create({
                code: req.body.code,
                name: req.body.name,
                short_name: req.body.short_name,
            })
            
            return res.status(201).json(core.ResponseFormat.build(
                specialty,
                "Specialty created successfully",
                201,
                "success"
            ))
        } catch (error) {
            return res.status(error.status).json(error)
        }
    }

    async readAll(req, res) {
        try {
            let specialtys = await SpecialtyService.readAll()
            
            return res.status(200).json(core.ResponseFormat.build(
                specialtys,
                "Specialtys read successfully",
                200,
                "success"
            ))
        } catch (error) {
            return res.status(error.status).json(error)
        }
    }

    async readById(req, res) {
        try {
            let specialty = await SpecialtyService.readById(req.params.id)

            return res.status(200).json(core.ResponseFormat.build(
                specialty,
                "Specialty read successfully",
                200,
                "success"
            ))
        } catch (error) {
            return res.status(error.status).json(error)
        }
    }

    async update(req, res) {
        try {
            let specialty = await SpecialtyService.update(req.params.id, {
                code: req.body.code,
                name: req.body.name,
                short_name: req.body.short_name,
            })

            return res.status(200).json(core.ResponseFormat.build(
                specialty,
                "Specialty updated successfully",
                200,
                "success"
            ))
        } catch (error) {
            return res.status(error.status).json(error)
        }
    }

    async destroy(req, res) {
        try {
            await SpecialtyService.destroy(req.params.id)

            return res.status(200).json(core.ResponseFormat.build(
                {},
                "Specialty deleted successfully",
                200,
                "success"
            ))
        } catch (error) {
            return res.status(error.status).json(error)
        }
    }
}

export default new specialtyController()