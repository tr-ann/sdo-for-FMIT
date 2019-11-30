import LessonService from '../services/LessonService'
import core from '../../../core'

export default class lessonController {

    _lessonService = new LessonService()

    async create(req, res) {
        try {
            let lesson = await this._lessonService.create({
                group_id:           req.body.group_id,
                subgroup_id:        req.body.subgroup_id,
                teacher_id:         req.body.teacher_id,
                type_id:            req.body.type_id,
                room_id:            req.body.room_id,
                discipline_id:      req.body.discipline_id,
                lessonNumber_id:    req.body.lessonNumber_id,
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
            let lessons = await this._lessonService.readAll()
            
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
            let lesson = await this._lessonService.readById(req.params.id)

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
            let lesson = await this._lessonService.update(req.params.id, {
                group_id:           req.body.group_id,
                subgroup_id:        req.body.subgroup_id,
                teacher_id:         req.body.teacher_id,
                type_id:            req.body.type_id,
                room_id:            req.body.room_id,
                discipline_id:      req.body.discipline_id,
                lessonNumber_id:    req.body.lessonNumber_id,
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
            await this._lessonService.destroy(req.params.id)

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
