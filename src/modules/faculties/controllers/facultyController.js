import FacultyService from '../services/FacultyService'
import helpers from '../../../helpers'

class facultyController {

    async create(req, res) {
        try {
            let faculty = await FacultyService.create({
                name: req.body.name,
                short_name: req.body.short_name,
            })
            
            return res.status(201).json(helpers.ResponseFormat.build(
                faculty,
                "Faculty created successfully",
                201,
                "success"
            ))
        } catch (error) {
            return res.status(error.status).json(error)
        }
    }

    async readAll(req, res) {
        try {
            let facultys = await FacultyService.readAll()
            
            return res.status(200).json(helpers.ResponseFormat.build(
                facultys,
                "Facultys read successfully",
                200,
                "success"
            ))
        } catch (error) {
            return res.status(error.status).json(error)
        }
    }

    async readById(req, res) {
        try {
            let faculty = await FacultyService.readById(req.params.id)

            return res.status(200).json(helpers.ResponseFormat.build(
                faculty,
                "Faculty read successfully",
                200,
                "success"
            ))
        } catch (error) {
            return res.status(error.status).json(error)
        }
    }

    async update(req, res) {
        try {
            let faculty = await FacultyService.update(req.params.id, {
                name:   req.body.name,
                short_name: req.body.short_name,
            })

            return res.status(200).json(helpers.ResponseFormat.build(
                faculty,
                "Faculty updated successfully",
                200,
                "success"
            ))
        } catch (error) {
            return res.status(error.status).json(error)
        }
    }

    async destroy(req, res) {
        try {
            await FacultyService.destroy(req.params.id)

            return res.status(200).json(helpers.ResponseFormat.build(
                {},
                "Faculty deleted successfully",
                200,
                "success"
            ))
        } catch (error) {
            return res.status(error.status).json(error)
        }
    }
}

export default new facultyController()