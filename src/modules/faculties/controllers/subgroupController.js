import SubgroupService from '../services/SubgroupService'
import helpers from '../../../helpers'

class subgroupController {

    async create(req, res, next) {
        try {
            let subgroup = await SubgroupService.create({
                name: req.body.name,
                group_id: req.body.group_id,
            })
            
            return res.status(201).json(helpers.ResponseFormat.build(
                subgroup,
                "Subgroup created successfully",
                201,
                "success"
            ))
        } catch (error) {
            next(error)
        }
    }

    async readAll(req, res, next) {
        try {
            let subgroups = await SubgroupService.readAll()
            
            return res.status(200).json(helpers.ResponseFormat.build(
                subgroups,
                "Subgroups read successfully",
                200,
                "success"
            ))
        } catch (error) {
            next(error)
        }
    }

    async readById(req, res, next) {
        try {
            let subgroup = await SubgroupService.readById(req.params.id)

            return res.status(200).json(helpers.ResponseFormat.build(
                subgroup,
                "Subgroup read successfully",
                200,
                "success"
            ))
        } catch (error) {
            next(error)
        }
    }

    async update(req, res, next) {
        try {
            let subgroup = await SubgroupService.update(req.params.id, {
                name:   req.body.name,
                group_id: req.body.group_id,
            })

            return res.status(200).json(helpers.ResponseFormat.build(
                subgroup,
                "Subgroup updated successfully",
                200,
                "success"
            ))
        } catch (error) {
            next(error)
        }
    }

    async destroy(req, res, next) {
        try {
            await SubgroupService.destroy(req.params.id)

            return res.status(200).json(helpers.ResponseFormat.build(
                {},
                "Subgroup deleted successfully",
                200,
                "success"
            ))
        } catch (error) {
            next(error)
        }
    }
}

export default new subgroupController()