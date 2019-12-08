import AcademicRankService from '../services/AcademicRankService'

import { ResponseFormat } from '../../../helpers'

class AcademicRankController {

    async create(req, res, next) {
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
            next(error)
        }
    }

    async readAll(req, res, next) {
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
            next(error)
        }
    }

    async readById(req, res, next) {
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
            next(error)
        }
    }
    
    async update(req, res, next) {
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
            next(error)
        }
    }
    
    async destroy(req, res, next) {
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
           next(error)
        }
    }
}

export default new AcademicRankController()