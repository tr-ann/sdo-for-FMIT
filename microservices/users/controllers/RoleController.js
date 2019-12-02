import RoleService from '../services/RoleService'

const ResponseFormat = require('../../../core').ResponseFormat;

class RoleController {

    async create(req, res) {
        try {
            const role = await RoleService.create({
                name: req.body.name
            });
            return res.status(201)
                .json(
                    ResponseFormat.build(
                        role, 
                        "Role created successfully", 
                        201, 
                        "success"
                    )
                );
        } catch (error) {
            return res.status(error.status).json(error);
        }
    }

    async readAll(req, res) {
        try {
            let roles = await RoleService.all()
            return res.status(200)
                .json(
                    ResponseFormat.build(
                        roles,
                        "Roles read successfully",
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
            let role = RoleService.findById(req.params.id)
            return res.status(200)
                .json(
                    ResponseFormat.build(
                        role,
                        "Role read successfully",
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
            let role = await RoleService.update(req.params.id, {
                name: req.body.name,
            })
            return res.status(200)
                .json(
                    ResponseFormat.build(
                        role,
                        "Role updated successfully",
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
            await RoleService.delete(req.params.id)
            return res.status(200)
                .json(
                    ResponseFormat.build(
                        {},
                        "Role deleted successfully",
                        200,
                        "success"
                    )
                )
        } catch (error) { 
            res.status(error.status).json(error)
        }
    }
}

export default new RoleController()