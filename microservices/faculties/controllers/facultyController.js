import FacultyService from '../services/FacultyService'
import core from '../../../core'

export default class facultyController {

    _facultyService = new FacultyService()

    async create(req, res) {
        try {
            let faculty = await this._facultyService.create({
                name:       req.body.name,
                short_name: req.body.short_name,
            })
            
            return res.status(201).json(core.ResponseFormat.build(
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
            let facultys = await this._facultyService.readAll()
            
            return res.status(200).json(core.ResponseFormat.build(
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
            let faculty = await this._facultyService.readById(req.params.id)

            return res.status(200).json(core.ResponseFormat.build(
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
            let faculty = await this._facultyService.update(req.params.id, {
                name:       req.body.name,
                short_name: req.body.short_name,
            })

            return res.status(200).json(core.ResponseFormat.build(
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
            let deletedFaculty = await this._facultyService.destroy(req.params.id)

            return res.status(200).json(core.ResponseFormat.build(
                deletedFaculty,
                "Faculty deleted successfully",
                200,
                "success"
            ))
        } catch (error) {
            return res.status(error.status).json(error)
        }
    }
}