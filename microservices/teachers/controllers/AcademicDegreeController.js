import AcademicDegreeService from '../services/AcademicDegreeService'

import { ResponseFormat } from '../../../core'

class AcademicDegreeController {

    async create(req, res) {
        try {
            const academDegree = await AcademicDegreeService.create({
                name: req.body.name
            });
            return res.status(201)
                .json(
                    ResponseFormat.build(
                        academDegree, 
                        "Academic degree created successfully", 
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
            let academDegrees = await AcademicDegreeService.readAll()
            return res.status(200)
                .json(
                    ResponseFormat.build(
                        academDegrees,
                        "Academic degrees read successfully",
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
            let academDegree = AcademicDegreeService.findById(req.params.id)
            return res.status(200)
                .json(
                    ResponseFormat.build(
                        academDegree,
                        "Academic degree read successfully",
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
            let academDegree = await AcademicDegreeService.update(req.params.id, {
                name: req.body.name
            })
            return res.status(200)
                .json(
                    ResponseFormat.build(
                        academDegree,
                        "Academic degree updated successfully",
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
            await AcademicDegreeService.delete(req.params.id)
            return res.status(200)
                .json(
                    ResponseFormat.build(
                        {},
                        "Academic degree deleted successfully",
                        200,
                        "success"
                    )
                )
        } catch (error) { 
            res.status(error.status).json(error)
        }
    }
}

export default new AcademicDegreeController()