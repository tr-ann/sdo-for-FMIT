import LectureRoomService from '../services/LectureRoomService'
import core from '../../../core'

export default class lectureRoomController {

    _lectureRoomService = new LectureRoomService()

    async create(req, res) {
        try {
            let lectureRoom = await this._lectureRoomService.create({
                number:         req.body.number,
                seats_count:    req.body.seats_count,
                type_id:        req.body.type_id,
                building_id:    req.body.building_id,
            })
            
            return res.status(201).json(core.ResponseFormat.build(
                lectureRoom,
                "Lecture room created successfully",
                201,
                "success"
            ))
        } catch (error) {
            return res.status(error.status).json(error)
        }
    }

    async readAll(req, res) {
        try {
            let lectureRooms = await this._lectureRoomService.readAll()
            
            return res.status(200).json(core.ResponseFormat.build(
                lectureRooms,
                "Lecture rooms read successfully",
                200,
                "success"
            ))
        } catch (error) {
            return res.status(error.status).json(error)
        }
    }

    async readById(req, res) {
        try {
            let lectureRoom = await this._lectureRoomService.readById(req.params.id)

            return res.status(200).json(core.ResponseFormat.build(
                lectureRoom,
                "Lecture room read successfully",
                200,
                "success"
            ))
        } catch (error) {
            return res.status(error.status).json(error)
        }
    }

    async update(req, res) {
        try {
            let lectureRoom = await this._lectureRoomService.update(req.params.id, {
                number:         req.body.number,
                seats_count:    req.body.seats_count,
                type_id:        req.body.type_id,
                building_id:    req.body.building_id,
            })

            return res.status(200).json(core.ResponseFormat.build(
                lectureRoom,
                "Lecture room updated successfully",
                200,
                "success"
            ))
        } catch (error) {
            return res.status(error.status).json(error)
        }
    }

    async destroy(req, res) {
        try {
            await this._lectureRoomService.destroy(req.params.id)

            return res.status(200).json(core.ResponseFormat.build(
                {},
                "Lecture room deleted successfully",
                200,
                "success"
            ))
        } catch (error) {
            return res.status(error.status).json(error)
        }
    }
}
