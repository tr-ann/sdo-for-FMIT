import PositionService from '../services/PositionService'

import { ResponseFormat } from '../../../core'

class PositionController {

    async create(req, res) {
        try {
            const position = await PositionService.create({
                name: req.body.name
            });
            return res.status(201)
                .json(
                    ResponseFormat.build(
                        position, 
                        "Position created successfully", 
                        201, 
                        "success"
                    )
                )
        } catch (error) {
            return res.status(error.status).json(error);
        }
    }

    async readAll(req, res) {
        try {
            let positions = await PositionService.readAll()
            return res.status(200)
                .json(
                    ResponseFormat.build(
                        positions,
                        "Positions read successfully",
                        200,
                        "success"
                    )
                )
        } catch(error) {
            return res.status(error.status).json(error)
        }
    }

    async readById(req, res) {
        try {
            let position = PositionService.findById(req.params.id)
            return res.status(200)
                .json(
                    ResponseFormat.build(
                        position,
                        "Position read successfully",
                        200,
                        "success"
                    )
                )
        } catch (error) {
            return res.status(error.status).json(error)
        }
    }
    
    async update(req, res) {
        try {
            let position = await PositionService.update(req.params.id, {
                name: req.body.name
            })
            return res.status(200)
                .json(
                    ResponseFormat.build(
                        position,
                        "Position updated successfully",
                        200,
                        "success"
                    )
                )
        } catch(error) {
             res.status(error.status).json(error)
        }
    }
    
    async destroy (req, res) {
        try {
            await PositionService.delete(req.params.id)
            return res.status(200)
                .json(
                    ResponseFormat.build(
                        {},
                        "Position deleted successfully",
                        200,
                        "success"
                    )
                )
        } catch (error) { 
            res.status(error.status).json(error)
        }
    }
}

export default new PositionController()