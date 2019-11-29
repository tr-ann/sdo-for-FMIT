import UserService from '../services/user'
const userService = new UserService()

const ResponseFormat = require('../../../core').ResponseFormat;

export default class UserController {

    async create(req, res) {
        try {
            const user = await userService.create({
                login: req.body.username,
                password: req.body.password
            });
            return res.status(201).json(ResponseFormat.build(
                user, 
                "User Create Successfully", 
                201, 
                "success"));
        } catch (error) {
            return res.status(error.status).json(error);
        }
    }

    async list(req, res) {
        try {
            let users = await userService.all()
            return res.status(200).json(ResponseFormat.build(
                users,
                "User Information Reterive successfully",
                200,
                "success"
            ))
        } catch(error) {
            return res.status(error.status).json(error)
        }
    }

    async readById(req, res) {
        try {
            let user = userService.findById(req.body.userId)
            return res.status(200).json(
                ResponseFormat.build(
                    user,
                    "User information reterieve successfully",
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
            let user = await userService.update(req.params.id, {
                login: req.body.username,
                password: req.body.password,
            })
            return res.status(200).json(
                ResponseFormat.build(
                    usr,
                    "user Update successfully",
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
            await userService.delete(req.params.userId)
            return res.status(200).json(
                ResponseFormat.build(
                    {},
                    "user deleted successfully",
                    200,
                    "success"
                )
            )
        } catch (error) { 
            res.status(error.status).json(error)
        }
    }
}