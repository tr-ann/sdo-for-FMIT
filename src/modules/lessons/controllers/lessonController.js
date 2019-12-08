import LessonService from '../services/LessonService'
import helpers from '../../../helpers'

class lessonController {

    async create(req, res, next) {
        try {
            let lesson = await LessonService.create({
                group_id:           req.body.group_id,
                subgroup_id:        req.body.subgroup_id,
                teacher_id:         req.body.teacher_id,
                type_id:            req.body.type_id,
                room_id:            req.body.room_id,
                discipline_id:      req.body.discipline_id,
                lesson_number_id:   req.body.lesson_number_id,
                week_day:           req.body.week_day,
            })
            
            return res.status(201).json(helpers.ResponseFormat.build(
                lesson,
                "Lesson created successfully",
                201,
                "success"
            ))
        } catch (error) {
            next(error)
        }
    }

    async readAll(req, res, next) {
        try {
            let lessons = await LessonService.readAll()
            
            return res.status(200).json(helpers.ResponseFormat.build(
                lessons,
                "Lessons read successfully",
                200,
                "success"
            ))
        } catch (error) {
            next(error)
        }
    }

    async readById(req, res, next) {
        try {
            let lesson = await LessonService.readById(req.params.id)

            return res.status(200).json(helpers.ResponseFormat.build(
                lesson,
                "Lesson read successfully",
                200,
                "success"
            ))
        } catch (error) {
            next(error)
        }
    }

    async update(req, res, next) {
        try {
            let lesson = await LessonService.update(req.params.id, {
                group_id:           req.body.group_id,
                subgroup_id:        req.body.subgroup_id,
                teacher_id:         req.body.teacher_id,
                type_id:            req.body.type_id,
                room_id:            req.body.room_id,
                discipline_id:      req.body.discipline_id,
                lesson_number_id:   req.body.lesson_number_id,
                week_day:           req.body.week_day,
            })

            return res.status(200).json(helpers.ResponseFormat.build(
                lesson,
                "Lesson updated successfully",
                200,
                "success"
            ))
        } catch (error) {
            next(error)
        }
    }

    async destroy(req, res, next) {
        try {
            await LessonService.destroy(req.params.id)

            return res.status(200).json(helpers.ResponseFormat.build(
                {},
                "Lesson deleted successfully",
                200,
                "success"
            ))
        } catch (error) {
            next(error)
        }
    }
}

export default new lessonController()