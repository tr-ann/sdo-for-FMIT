import BuildingService from '../services/BuildingService'
import core from '../../../core'

export default class buildingController {

    _buildingService = new BuildingService()

    async create(req, res) {
        try {
            let building = await this._buildingService.create({
                name: req.body.name,
            })
            
            return res.status(201).json(core.ResponseFormat.build(
                building,
                "Building created successfully",
                201,
                "success"
            ))
        } catch (error) {
            return res.status(error.status).json(error)
        }
    }

    async readAll(req, res) {
        try {
            let buildings = await this._buildingService.readAll()
            
            return res.status(200).json(core.ResponseFormat.build(
                buildings,
                "Buildings read successfully",
                200,
                "success"
            ))
        } catch (error) {
            return res.status(error.status).json(error)
        }
    }

    async readById(req, res) {
        try {
            let building = await this._buildingService.readById(req.params.id)

            return res.status(200).json(core.ResponseFormat.build(
                building,
                "Building read successfully",
                200,
                "success"
            ))
        } catch (error) {
            return res.status(error.status).json(error)
        }
    }

    async update(req, res) {
        try {
            let building = await this._buildingService.update(req.params.id, {
                name:   req.body.name,
            })

            return res.status(200).json(core.ResponseFormat.build(
                building,
                "Building updated successfully",
                200,
                "success"
            ))
        } catch (error) {
            return res.status(error.status).json(error)
        }
    }

    async destroy(req, res) {
        try {
            await this._buildingService.destroy(req.params.id)

            return res.status(200).json(core.ResponseFormat.build(
                {},
                "Building deleted successfully",
                200,
                "success"
            ))
        } catch (error) {
            return res.status(error.status).json(error)
        }
    }
}