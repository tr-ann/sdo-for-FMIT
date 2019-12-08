import RoomTypeService from '../services/RoomTypeService'
import helpers from '../../../helpers'

class roomTypeController {

    async create(req, res, next) {
        try {
            let roomType = await RoomTypeService.create({
                name: req.body.name,
            })
            
            return res.status(201).json(helpers.ResponseFormat.build(
                roomType,
                "Room type created successfully",
                201,
                "success"
            ))
        } catch (error) {
            next(error)
        }
    }

    async readAll(req, res, next) {
        try {
            let roomTypes = await RoomTypeService.readAll()
            
            return res.status(200).json(helpers.ResponseFormat.build(
                roomTypes,
                "Room types read successfully",
                200,
                "success"
            ))
        } catch (error) {
            next(error)
        }
    }

    async readById(req, res, next) {
        try {
            let roomType = await RoomTypeService.readById(req.params.id)

            return res.status(200).json(helpers.ResponseFormat.build(
                roomType,
                "Room type read successfully",
                200,
                "success"
            ))
        } catch (error) {
            next(error)
        }
    }

    async update(req, res, next) {
        try {
            let roomType = await RoomTypeService.update(req.params.id, {
                name:   req.body.name,
            })

            return res.status(200).json(helpers.ResponseFormat.build(
                roomType,
                "Room type updated successfully",
                200,
                "success"
            ))
        } catch (error) {
            next(error)
        }
    }

    async destroy(req, res, next) {
        try {
            await RoomTypeService.destroy(req.params.id)

            return res.status(200).json(helpers.ResponseFormat.build(
                {},
                "Room type deleted successfully",
                200,
                "success"
            ))
        } catch (error) {
            next(error)
        }
    }
}

export default new roomTypeController()