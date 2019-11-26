import LessonNumbersService from '../services/LessonNumbersService'
import core from '../../../core'

export default class lessonNumberController {

    _lessonNumberService = new LessonNumbersService()

    async create(req, res) {
        try {
            let lessonNumber = await this._lessonNumberService.create({
                number:         req.body.number,
                start_time_1:   req.body.start_time_1,
                end_time_1:     req.body.end_time_1,
                start_time_2:   req.body.start_time_2,
                end_time_2:     req.body.end_time_2,
            })
            
            return res.status(201).json(core.ResponseFormat.build(
                lessonNumber,
                "Lesson number created successfully",
                201,
                "success"
            ))
        } catch (error) {
            return res.status(error.status).json(error)
        }
    }

    async readAll(req, res) {
        try {
            let lessonNumbers = await this._lessonNumberService.readAll()
            
            return res.status(200).json(core.ResponseFormat.build(
                lessonNumbers,
                "Lesson numbers read successfully",
                200,
                "success"
            ))
        } catch (error) {
            return res.status(error.status).json(error)
        }
    }

    async readById(req, res) {
        try {
            let lessonNumber = await this._lessonNumberService.readById(req.params.id)

            return res.status(200).json(core.ResponseFormat.build(
                lessonNumber,
                "Lesson number read successfully",
                200,
                "success"
            ))
        } catch (error) {
            return res.status(error.status).json(error)
        }
    }

    async update(req, res) {
        try {
            let lessonNumber = await this._lessonNumberService.update(req.params.id, {
                number:         req.body.number,
                start_time_1:   req.body.start_time_1,
                end_time_1:     req.body.end_time_1,
                start_time_2:   req.body.start_time_2,
                end_time_2:     req.body.end_time_2,
            })

            return res.status(200).json(core.ResponseFormat.build(
                lessonNumber,
                "Lesson number updated successfully",
                200,
                "success"
            ))
        } catch (error) {
            return res.status(error.status).json(error)
        }
    }

    async destroy(req, res) {
        try {
            let deletedLessonNumber = await this._lessonNumberService.destroy(req.params.id)

            return res.status(200).json(core.ResponseFormat.build(
                deletedLessonNumber,
                "Lesson number deleted successfully",
                200,
                "success"
            ))
        } catch (error) {
            return res.status(error.status).json(error)
        }
    }
}
