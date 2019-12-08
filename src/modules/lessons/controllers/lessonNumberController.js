import LessonNumberService from '../services/LessonNumberService'
import helpers from '../../../helpers'

class lessonNumberController {

    async create(req, res, next) {
        try {
            let lessonNumber = await LessonNumberService.create({
                number:         req.body.number,
                start_time_1:   req.body.start_time_1,
                end_time_1:     req.body.end_time_1,
                start_time_2:   req.body.start_time_2,
                end_time_2:     req.body.end_time_2,
            })
            
            return res.status(201).json(helpers.ResponseFormat.build(
                lessonNumber,
                "Lesson number created successfully",
                201,
                "success"
            ))
        } catch (error) {
            next(error)
        }
    }

    async readAll(req, res, next) {
        try {
            let lessonNumbers = await LessonNumberService.readAll()
            
            return res.status(200).json(helpers.ResponseFormat.build(
                lessonNumbers,
                "Lesson numbers read successfully",
                200,
                "success"
            ))
        } catch (error) {
            next(error)
        }
    }

    async readById(req, res, next) {
        try {
            let lessonNumber = await LessonNumberService.readById(req.params.id)

            return res.status(200).json(helpers.ResponseFormat.build(
                lessonNumber,
                "Lesson number read successfully",
                200,
                "success"
            ))
        } catch (error) {
            next(error)
        }
    }

    async update(req, res, next) {
        try {
            let lessonNumber = await LessonNumberService.update(req.params.id, {
                number:         req.body.number,
                start_time_1:   req.body.start_time_1,
                end_time_1:     req.body.end_time_1,
                start_time_2:   req.body.start_time_2,
                end_time_2:     req.body.end_time_2,
            })

            return res.status(200).json(helpers.ResponseFormat.build(
                lessonNumber,
                "Lesson number updated successfully",
                200,
                "success"
            ))
        } catch (error) {
            next(error)
        }
    }

    async destroy(req, res, next) {
        try {
            await LessonNumberService.destroy(req.params.id)

            return res.status(200).json(helpers.ResponseFormat.build(
                {},
                "Lesson number deleted successfully",
                200,
                "success"
            ))
        } catch (error) {
            next(error)
        }
    }
}

export default new lessonNumberController()