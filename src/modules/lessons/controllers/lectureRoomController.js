import LectureRoomService from '../services/LectureRoomService'
import helpers from '../../../helpers'

class lectureRoomController {

    async create(req, res, next) {
        try {
            let lectureRoom = await LectureRoomService.create({
                number:         req.body.number,
                seats_count:    req.body.seats_count,
                type_id:        req.body.type_id,
                building_id:    req.body.building_id,
            })
            
            return res.status(201).json(helpers.ResponseFormat.build(
                lectureRoom,
                "Lecture room created successfully",
                201,
                "success"
            ))
        } catch (error) {
            next(error)
        }
    }

    async readAll(req, res, next) {
        try {
            let lectureRooms = await LectureRoomService.readAll()
            
            return res.status(200).json(helpers.ResponseFormat.build(
                lectureRooms,
                "Lecture rooms read successfully",
                200,
                "success"
            ))
        } catch (error) {
            next(error)
        }
    }

    async readById(req, res, next) {
        try {
            let lectureRoom = await LectureRoomService.readById(req.params.id)

            return res.status(200).json(helpers.ResponseFormat.build(
                lectureRoom,
                "Lecture room read successfully",
                200,
                "success"
            ))
        } catch (error) {
            next(error)
        }
    }

    async update(req, res, next) {
        try {
            let lectureRoom = await LectureRoomService.update(req.params.id, {
                number:         req.body.number,
                seats_count:    req.body.seats_count,
                type_id:        req.body.type_id,
                building_id:    req.body.building_id,
            })

            return res.status(200).json(helpers.ResponseFormat.build(
                lectureRoom,
                "Lecture room updated successfully",
                200,
                "success"
            ))
        } catch (error) {
            next(error)
        }
    }

    async destroy(req, res, next) {
        try {
            await LectureRoomService.destroy(req.params.id)

            return res.status(200).json(helpers.ResponseFormat.build(
                {},
                "Lecture room deleted successfully",
                200,
                "success"
            ))
        } catch (error) {
            next(error)
        }
    }
}

export default new lectureRoomController()