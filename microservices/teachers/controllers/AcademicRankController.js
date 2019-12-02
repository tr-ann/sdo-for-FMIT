import AcademicRankService from '../services/AcademicRankService'

import { ResponseFormat } from '../../../core'

class AcademicRankController {

    async create(req, res) {
        try {
            const academRank = await AcademicRankService.create({
                name: req.body.name
            });
            return res.status(201)
                .json(
                    ResponseFormat.build(
                        academRank, 
                        "Academic rank created successfully", 
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
            let academRanks = await AcademicRankService.readAll()
            return res.status(200)
                .json(
                    ResponseFormat.build(
                        academRanks,
                        "Academic ranks read successfully",
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
            let academRank = AcademicRankService.findById(req.params.id)
            return res.status(200)
                .json(
                    ResponseFormat.build(
                        academRank,
                        "Academic rank read successfully",
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
            let academRank = await AcademicRankService.update(req.params.id, {
                name: req.body.name
            })
            return res.status(200)
                .json(
                    ResponseFormat.build(
                        academRank,
                        "Academic rank updated successfully",
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
            await AcademicRankService.delete(req.params.id)
            return res.status(200)
                .json(
                    ResponseFormat.build(
                        {},
                        "Academic rank deleted successfully",
                        200,
                        "success"
                    )
                )
        } catch (error) { 
            res.status(error.status).json(error)
        }
    }
}

export default new AcademicRankController()