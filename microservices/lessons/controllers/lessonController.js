import LessonService from '../services/LessonService'
import core from '../../../core'

class lessonController {

    async create(req, res) {
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
            
            return res.status(201).json(core.ResponseFormat.build(
                lesson,
                "Lesson created successfully",
                201,
                "success"
            ))
        } catch (error) {
            return res.status(error.status).json(error)
        }
    }

    async readAll(req, res) {
        try {
            let lessons = await LessonService.readAll()
            
            return res.status(200).json(core.ResponseFormat.build(
                lessons,
                "Lessons read successfully",
                200,
                "success"
            ))
        } catch (error) {
            return res.status(error.status).json(error)
        }
    }

    async readById(req, res) {
        try {
            let lesson = await LessonService.readById(req.params.id)

            return res.status(200).json(core.ResponseFormat.build(
                lesson,
                "Lesson read successfully",
                200,
                "success"
            ))
        } catch (error) {
            return res.status(error.status).json(error)
        }
    }

    async update(req, res) {
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

            return res.status(200).json(core.ResponseFormat.build(
                lesson,
                "Lesson updated successfully",
                200,
                "success"
            ))
        } catch (error) {
            return res.status(error.status).json(error)
        }
    }

    async destroy(req, res) {
        try {
            await LessonService.destroy(req.params.id)

            return res.status(200).json(core.ResponseFormat.build(
                {},
                "Lesson deleted successfully",
                200,
                "success"
            ))
        } catch (error) {
            return res.status(error.status).json(error)
        }
    }
}

export default new lessonController()