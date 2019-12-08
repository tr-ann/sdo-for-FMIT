import LessonTypeService from '../services/LessonTypeService'
import helpers from '../../../helpers'

class lessonTypeController {

    async create(req, res, next) {
        try {
            let lessonType = await LessonTypeService.create({
                name: req.body.name,
            })
            
            return res.status(201).json(helpers.ResponseFormat.build(
                lessonType,
                "Lesson type created successfully",
                201,
                "success"
            ))
        } catch (error) {
            next(error)
        }
    }

    async readAll(req, res, next) {
        try {
            let lessonTypes = await LessonTypeService.readAll()
            
            return res.status(200).json(helpers.ResponseFormat.build(
                lessonTypes,
                "Lesson types read successfully",
                200,
                "success"
            ))
        } catch (error) {
            next(error)
        }
    }

    async readById(req, res, next) {
        try {
            let lessonType = await LessonTypeService.readById(req.params.id)

            return res.status(200).json(helpers.ResponseFormat.build(
                lessonType,
                "Lesson type read successfully",
                200,
                "success"
            ))
        } catch (error) {
            next(error)
        }
    }

    async update(req, res, next) {
        try {
            let lessonType = await LessonTypeService.update(req.params.id, {
                name:   req.body.name,
            })

            return res.status(200).json(helpers.ResponseFormat.build(
                lessonType,
                "Lesson type updated successfully",
                200,
                "success"
            ))
        } catch (error) {
            next(error)
        }
    }

    async destroy(req, res, next) {
        try {
            await LessonTypeService.destroy(req.params.id)

            return res.status(200).json(helpers.ResponseFormat.build(
                {},
                "Lesson type deleted successfully",
                200,
                "success"
            ))
        } catch (error) {
            next(error)
        }
    }
}

export default new lessonTypeController()