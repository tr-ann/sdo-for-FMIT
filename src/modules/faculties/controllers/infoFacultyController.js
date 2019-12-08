import InfoFacultyService from '../services/InfoFacultyService'
import helpers from '../../../helpers'

class infoFacultyController {

    async create(req, res) {
        try {
            let infoFaculty = await InfoFacultyService.create({
                description: req.body.description,
                phone_number:req.body.phone_number,
            })
            
            return res.status(201).json(helpers.ResponseFormat.build(
                infoFaculty,
                "InfoFaculty created successfully",
                201,
                "success"
            ))
        } catch (error) {
            return res.status(error.status).json(error)
        }
    }

    async readAll(req, res) {
        try {
            let infoFacultys = await InfoFacultyService.readAll()
            
            return res.status(200).json(helpers.ResponseFormat.build(
                infoFacultys,
                "InfoFacultys read successfully",
                200,
                "success"
            ))
        } catch (error) {
            return res.status(error.status).json(error)
        }
    }

    async readById(req, res) {
        try {
            let infoFaculty = await InfoFacultyService.readById(req.params.id)

            return res.status(200).json(helpers.ResponseFormat.build(
                infoFaculty,
                "InfoFaculty read successfully",
                200,
                "success"
            ))
        } catch (error) {
            return res.status(error.status).json(error)
        }
    }

    async update(req, res) {
        try {
            let infoFaculty = await InfoFacultyService.update(req.params.id, {
                description: req.body.description,
                phone_number:req.body.phone_number,
            })

            return res.status(200).json(helpers.ResponseFormat.build(
                infoFaculty,
                "InfoFaculty updated successfully",
                200,
                "success"
            ))
        } catch (error) {
            return res.status(error.status).json(error)
        }
    }

    async destroy(req, res) {
        try {
            await InfoFacultyService.destroy(req.params.id)

            return res.status(200).json(helpers.ResponseFormat.build(
                {},
                "InfoFaculty deleted successfully",
                200,
                "success"
            ))
        } catch (error) {
            return res.status(error.status).json(error)
        }
    }
}

export default new infoFacultyController()