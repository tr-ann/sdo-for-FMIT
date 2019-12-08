import StudyModeService from '../services/StudyModeService'
import helpers from '../../../helpers'

class studyModeController {

    async create(req, res) {
        try {
            let studyMode = await StudyModeService.create({
                name: req.body.name,
            })
            
            return res.status(201).json(helpers.ResponseFormat.build(
                studyMode,
                "StudyMode created successfully",
                201,
                "success"
            ))
        } catch (error) {
            return res.status(error.status).json(error)
        }
    }

    async readAll(req, res) {
        try {
            let studyModes = await StudyModeService.readAll()
            
            return res.status(200).json(helpers.ResponseFormat.build(
                studyModes,
                "StudyModes read successfully",
                200,
                "success"
            ))
        } catch (error) {
            return res.status(error.status).json(error)
        }
    }

    async readById(req, res) {
        try {
            let studyMode = await StudyModeService.readById(req.params.id)

            return res.status(200).json(helpers.ResponseFormat.build(
                studyMode,
                "StudyMode read successfully",
                200,
                "success"
            ))
        } catch (error) {
            return res.status(error.status).json(error)
        }
    }

    async update(req, res) {
        try {
            let studyMode = await StudyModeService.update(req.params.id, {
                name:   req.body.name,
            })

            return res.status(200).json(helpers.ResponseFormat.build(
                studyMode,
                "StudyMode updated successfully",
                200,
                "success"
            ))
        } catch (error) {
            return res.status(error.status).json(error)
        }
    }

    async destroy(req, res) {
        try {
            await StudyModeService.destroy(req.params.id)

            return res.status(200).json(helpers.ResponseFormat.build(
                {},
                "StudyMode deleted successfully",
                200,
                "success"
            ))
        } catch (error) {
            return res.status(error.status).json(error)
        }
    }
}

export default new studyModeController()