import GroupService from '../services/GroupService'
import helpers from '../../../helpers'

class groupController {

    async create(req, res, next) {
        try {
            let group = await GroupService.create({
                number: req.body.number,
                faculty_id: req.body.faculty_id,
                specialty_id: req.body.specialty_id,
                study_mode_id:req.body.study_mode_id,
            })
            
            return res.status(201).json(helpers.ResponseFormat.build(
                group,
                "Group created successfully",
                201,
                "success"
            ))
        } catch (error) {
             next(error)
        }
    }

    async readAll(req, res, next) {
        try {
            let groups = await GroupService.readAll()
            
            return res.status(200).json(helpers.ResponseFormat.build(
                groups,
                "Groups read successfully",
                200,
                "success"
            ))
        } catch (error) {
             next(error)
        }
    }

    async readById(req, res, next) {
        try {
            let group = await GroupService.readById(req.params.id)

            return res.status(200).json(helpers.ResponseFormat.build(
                group,
                "Group read successfully",
                200,
                "success"
            ))
        } catch (error) {
             next(error)
        }
    }

    async update(req, res, next) {
        try {
            let group = await GroupService.update(req.params.id, {
                number: req.body.number,
                faculty_id: req.body.faculty_id,
                specialty_id: req.body.specialty_id,
                study_mode_id:req.body.study_mode_id,
            })

            return res.status(200).json(helpers.ResponseFormat.build(
                group,
                "Group updated successfully",
                200,
                "success"
            ))
        } catch (error) {
             next(error)
        }
    }

    async destroy(req, res, next) {
        try {
            await GroupService.destroy(req.params.id)

            return res.status(200).json(helpers.ResponseFormat.build(
                {},
                "Group deleted successfully",
                200,
                "success"
            ))
        } catch (error) {
             next(error)
        }
    }
}

export default new groupController()