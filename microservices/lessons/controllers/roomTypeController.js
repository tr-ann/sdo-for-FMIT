import RoomTypesService from '../services/RoomTypesService'
import core from '../../../core'

export default class roomTypeController {

    _roomTypeService = new RoomTypesService()

    async create(req, res) {
        try {
            let roomType = await this._roomTypeService.create({
                name: req.body.name,
            })
            
            return res.status(201).json(core.ResponseFormat.build(
                roomType,
                "Room type created successfully",
                201,
                "success"
            ))
        } catch (error) {
            return res.status(error.status).json(error)
        }
    }

    async readAll(req, res) {
        try {
            let roomTypes = await this._roomTypeService.readAll()
            
            return res.status(200).json(core.ResponseFormat.build(
                roomTypes,
                "Room types read successfully",
                200,
                "success"
            ))
        } catch (error) {
            return res.status(error.status).json(error)
        }
    }

    async readById(req, res) {
        try {
            let roomType = await this._roomTypeService.readById(req.params.id)

            return res.status(200).json(core.ResponseFormat.build(
                roomType,
                "Room type read successfully",
                200,
                "success"
            ))
        } catch (error) {
            return res.status(error.status).json(error)
        }
    }

    async update(req, res) {
        try {
            let roomType = await this._roomTypeService.update(req.params.id, {
                name:   req.body.name,
            })

            return res.status(200).json(core.ResponseFormat.build(
                roomType,
                "Room type updated successfully",
                200,
                "success"
            ))
        } catch (error) {
            return res.status(error.status).json(error)
        }
    }

    async destroy(req, res) {
        try {
            let deletedRoomType = await this._roomTypeService.destroy(req.params.id)

            return res.status(200).json(core.ResponseFormat.build(
                deletedRoomType,
                "Room type deleted successfully",
                200,
                "success"
            ))
        } catch (error) {
            return res.status(error.status).json(error)
        }
    }
}
