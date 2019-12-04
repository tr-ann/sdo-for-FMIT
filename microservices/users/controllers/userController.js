import UserService from '../services/UserService'

const ResponseFormat = require('../../../core').ResponseFormat;

class UserController {

    async create(req, res) {
        try {
            const user = await UserService.create({
                login: req.body.username,
                password: req.body.password
            })
            return res.status(201)
                .json(
                    ResponseFormat.build(
                        user, 
                        "User created successfully", 
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
            let users = await UserService.all()
            return res.status(200)
                .json(
                    ResponseFormat.build(
                        users,
                        "Users read successfully",
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
            let user = UserService.findById(req.params.id)
            return res.status(200)
                .json(
                    ResponseFormat.build(
                        user,
                        "User read successfully",
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
            let user = await UserService.update(req.params.id, {
                login: req.body.username,
                password: req.body.password,
            })
            return res.status(200)
                .json(
                    ResponseFormat.build(
                        user,
                        "User updated successfully",
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
            await UserService.delete(req.params.id)
            return res.status(200)
                .json(
                    ResponseFormat.build(
                        {},
                        "User deleted successfully",
                        200,
                        "success"
                    )
                )
        } catch (error) { 
            res.status(error.status).json(error)
        }
    }
}

export default new UserController()