import InfoFacultyService from '../services/InfoFacultyService'
import helpers from '../../../helpers'

class infoFacultyController {

    async create(req, res, next) {
        try {
            let infoFaculty = await InfoFacultyService.create({
                faculty_id: req.body.faculty_id,
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
             next(error)
        }
    }

    async readAll(req, res, next) {
        try {
            let infoFacultys = await InfoFacultyService.readAll()
            
            return res.status(200).json(helpers.ResponseFormat.build(
                infoFacultys,
                "InfoFacultys read successfully",
                200,
                "success"
            ))
        } catch (error) {
             next(error)
        }
    }

    async readById(req, res, next) {
        try {
            let infoFaculty = await InfoFacultyService.readById(req.params.id)

            return res.status(200).json(helpers.ResponseFormat.build(
                infoFaculty,
                "InfoFaculty read successfully",
                200,
                "success"
            ))
        } catch (error) {
             next(error)
        }
    }

    async update(req, res, next) {
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
             next(error)
        }
    }

    async destroy(req, res, next) {
        try {
            await InfoFacultyService.destroy(req.params.id)

            return res.status(200).json(helpers.ResponseFormat.build(
                {},
                "InfoFaculty deleted successfully",
                200,
                "success"
            ))
        } catch (error) {
             next(error)
        }
    }
}

export default new infoFacultyController()