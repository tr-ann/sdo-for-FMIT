import UserService from '../services/UserService'
import UserInfoService from '../services/UserInfoService'
import PhoneService from '../services/PhoneService'

import core from '../../../core'

class UserController {

    async create(req, res) {
        try {
            const user = await UserService.create({
                login: req.body.username,
                password: req.body.password
            })

            let fullName = req.body.first_name + ' ' + req.body.last_name + ' ' + req.body.middle_name
            await UserInfoService.create({
                user_id: user.id,
                full_name: fullName,
                birthday: req.body.birthday,
                sex: req.body.sex,
            })

            await PhoneService.create({
                user_id: user.id,
                phone: req.body.phone,
            })

            return res.status(201)
                .json(
                    core.ResponseFormat.build(
                        user.login, 
                        "User created successfully", 
                        201, 
                        "success"
                    )
                );
        } catch (error) {
            console.log(error.name)
            console.log(error.stack)
            return res.status(error.status).json(error);
        }
    }

    async readAll(req, res) {
        try {
            let users = await UserService.readAll()

            return res.status(200)
                .json(
                    core.ResponseFormat.build(
                        users,
                        "Users read successfully",
                        200,
                        "success"
                    )
                )
        } catch(error) {
            console.log(error)
            return res.status(error.status).json(error)
        }
    }

    async readById(req, res) {
        try {
            let user = UserService.findById(req.params.id)
            return res.status(200)
                .json(
                    core.ResponseFormat.build(
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
                    core.ResponseFormat.build(
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
                    core.ResponseFormat.build(
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