import SubgroupService from '../services/SubgroupService'
import core from '../../../core'

class subgroupController {

    async create(req, res) {
        try {
            let subgroup = await SubgroupService.create({
                name: req.body.name,
                group_id: req.body.group_id,
            })
            
            return res.status(201).json(core.ResponseFormat.build(
                subgroup,
                "Subgroup created successfully",
                201,
                "success"
            ))
        } catch (error) {
            return res.status(error.status).json(error)
        }
    }

    async readAll(req, res) {
        try {
            let subgroups = await SubgroupService.readAll()
            
            return res.status(200).json(core.ResponseFormat.build(
                subgroups,
                "Subgroups read successfully",
                200,
                "success"
            ))
        } catch (error) {
            return res.status(error.status).json(error)
        }
    }

    async readById(req, res) {
        try {
            let subgroup = await SubgroupService.readById(req.params.id)

            return res.status(200).json(core.ResponseFormat.build(
                subgroup,
                "Subgroup read successfully",
                200,
                "success"
            ))
        } catch (error) {
            return res.status(error.status).json(error)
        }
    }

    async update(req, res) {
        try {
            let subgroup = await SubgroupService.update(req.params.id, {
                name:   req.body.name,
                group_id: req.body.group_id,
            })

            return res.status(200).json(core.ResponseFormat.build(
                subgroup,
                "Subgroup updated successfully",
                200,
                "success"
            ))
        } catch (error) {
            return res.status(error.status).json(error)
        }
    }

    async destroy(req, res) {
        try {
            await SubgroupService.destroy(req.params.id)

            return res.status(200).json(core.ResponseFormat.build(
                {},
                "Subgroup deleted successfully",
                200,
                "success"
            ))
        } catch (error) {
            return res.status(error.status).json(error)
        }
    }
}

export default new subgroupController()