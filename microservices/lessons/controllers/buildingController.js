import BuildingService from '../services/BuildingService'
import core from '../../../core'

class buildingController {

    async create(req, res, next) {
        try {
            let building = await BuildingService.create({
                name: req.body.name,
            })
            
            return res.status(201).json(core.ResponseFormat.build(
                building,
                "Building created successfully",
                201,
                "success"
            ))
        } catch (error) {
            next(error)
        }
    }

    async readAll(req, res, next) {
        try {
            let buildings = await BuildingService.readAll()
            
            return res.status(200).json(core.ResponseFormat.build(
                buildings,
                "Buildings read successfully",
                200,
                "success"
            ))
        } catch (error) {
            next(error)
        }
    }

    async readById(req, res, next) {
        try {
            let building = await BuildingService.readById(req.params.id)

            return res.status(200).json(core.ResponseFormat.build(
                building,
                "Building read successfully",
                200,
                "success"
            ))
        } catch (error) {
            next(error)
        }
    }

    async update(req, res, next) {
        try {
            let building = await BuildingService.update(req.params.id, {
                name:   req.body.name,
            })

            return res.status(200).json(core.ResponseFormat.build(
                building,
                "Building updated successfully",
                200,
                "success"
            ))
        } catch (error) {
            next(error)
        }
    }

    async destroy(req, res, next) {
        try {
            await BuildingService.destroy(req.params.id)

            return res.status(200).json(core.ResponseFormat.build(
                {},
                "Building deleted successfully",
                200,
                "success"
            ))
        } catch (error) {
            next(error)
        }
    }
}

export default new buildingController()