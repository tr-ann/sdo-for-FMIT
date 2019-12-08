import UserService from '../services/UserService'
import UserInfoService from '../services/UserInfoService'
import PhoneService from '../services/PhoneService'
import RoleService from '../services/RoleService'

import db from '../../../config/dbModels'

import helpers from '../../../helpers'
import UserRoleService from '../services/UserRoleService'

class UserController {

    async create(req, res, next) {
        try {
            let user = await UserService.create({
                    login: req.body.login,
                    password: req.body.password,
                    phones: {
                        phone: req.body.phone,
                    }
                }, {
                    include: {
                        model: db.phone,
                }
            })

            await user.addUserInfo({
                user_id: user.id,
                full_name: req.body.first_name,
                email: req.body.email,
                birthday: req.body.birthday,
                sex: req.body.sex,
            })

            /*let fullName = req.body.first_name + ' ' + req.body.last_name + ' ' + req.body.middle_name
            let userInfo = await UserInfoService.create({
                user_id: user.id,
                full_name: fullName,
                email: req.body.email,
                birthday: req.body.birthday,
                sex: req.body.sex,
            })

            await PhoneService.create({
                user_id: user.id,
                phone: req.body.phone,
            })

            console.log(JSON.stringify(userInfo))

            await user.setRoles(1).then(sc=>{
                UserRoleService.create(sc)
            })*/

            return res.status(201)
                .json(
                    helpers.ResponseFormat.build(
                        user.login, 
                        "User created successfully", 
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
            let users = await UserService.readAll()

            return res.status(200)
                .json(
                    helpers.ResponseFormat.build(
                        users,
                        "Users read successfully",
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
            let user = UserService.findById(req.params.id)
            return res.status(200)
                .json(
                    helpers.ResponseFormat.build(
                        user,
                        "User read successfully",
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
            let user = await UserService.update(req.params.id, {
                login: req.body.username,
                password: req.body.password,
            })
            return res.status(200)
                .json(
                    helpers.ResponseFormat.build(
                        user,
                        "User updated successfully",
                        200,
                        "success"
                    )
                )
        } catch(error) {
            next(error)
        }
    }
    
    async destroy (req, res, next) {
        try {
            await UserService.delete(req.params.id)
            return res.status(200)
                .json(
                    helpers.ResponseFormat.build(
                        {},
                        "User deleted successfully",
                        200,
                        "success"
                    )
                )
        } catch (error) { 
            next(error)
        }
    }
}

export default new UserController()