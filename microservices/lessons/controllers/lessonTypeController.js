import LessonTypesService from '../services/LessonTypesService'
import core from '../../../core'

export default class lessonTypeController {

    _lessonTypeService = new LessonTypesService()

    async create(req, res) {
        try {
            let lessonType = await this._lessonTypeService.create({
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
            let lessonTypes = await this._lessonTypeService.readAll()
            
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
            let lessonType = await this._lessonTypeService.readById(req.params.id)

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
            let lessonType = await this._lessonTypeService.update(req.params.id, {
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
            let deletedLessonType = await this._lessonTypeService.destroy(req.params.id)

            return res.status(200).json(core.ResponseFormat.build(
                deletedLessonType,
                "Lesson type deleted successfully",
                200,
                "success"
            ))
        } catch (error) {
            return res.status(error.status).json(error)
        }
    }
}
