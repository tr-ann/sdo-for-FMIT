import LessonTypeService from '../services/LessonTypeService'
import core from '../../../core'

class lessonTypeController {

    async create(req, res) {
        try {
            let lessonType = await LessonTypeService.create({
                name: req.body.name,
            })
            
            return res.status(201).json(core.ResponseFormat.build(
                lessonType,
                "Lesson type created successfully",
                201,
                "success"
            ))
        } catch (error) {
            return res.status(error.status).json(error)
        }
    }

    async readAll(req, res) {
        try {
            let lessonTypes = await LessonTypeService.readAll()
            
            return res.status(200).json(core.ResponseFormat.build(
                lessonTypes,
                "Lesson types read successfully",
                200,
                "success"
            ))
        } catch (error) {
            return res.status(error.status).json(error)
        }
    }

    async readById(req, res) {
        try {
            let lessonType = await LessonTypeService.readById(req.params.id)

            return res.status(200).json(core.ResponseFormat.build(
                lessonType,
                "Lesson type read successfully",
                200,
                "success"
            ))
        } catch (error) {
            return res.status(error.status).json(error)
        }
    }

    async update(req, res) {
        try {
            let lessonType = await LessonTypeService.update(req.params.id, {
                name:   req.body.name,
            })

            return res.status(200).json(core.ResponseFormat.build(
                lessonType,
                "Lesson type updated successfully",
                200,
                "success"
            ))
        } catch (error) {
            return res.status(error.status).json(error)
        }
    }

    async destroy(req, res) {
        try {
            await LessonTypeService.destroy(req.params.id)

            return res.status(200).json(core.ResponseFormat.build(
                {},
                "Lesson type deleted successfully",
                200,
                "success"
            ))
        } catch (error) {
            return res.status(error.status).json(error)
        }
    }
}

export default new lessonTypeController()