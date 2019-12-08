import UserInfoService from '../services/UserInfoService'

const ResponseFormat = require('../../../helpers').ResponseFormat;

class UserInfoController {

    async create(req, res, next) {
        try {
            const userInfo = await UserInfoService.create({
                full_name: req.body.full_name,
                description: req.body.description,
                birthday: req.body.birthday,
                city: req.body.city,
                address: req.body.address,
            });
            return res.status(201)
                .json(
                    ResponseFormat.build(
                        userInfo, 
                        "UserInfo created successfully", 
                        201, 
                        "success"
                    )
                );
        } catch (error) {
            next(error)
        }
    }

    async readAll(req, res, next) {
        try {
            let userInfos = await UserInfoService.all()
            return res.status(200)
                .json(
                    ResponseFormat.build(
                        userInfos,
                        "UserInfos read successfully",
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
            let userInfo = UserInfoService.findById(req.params.id)
            return res.status(200)
                .json(
                    ResponseFormat.build(
                        userInfo,
                        "UserInfo read successfully",
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
            let userInfo = await UserInfoService.update(req.params.id, {
                full_name: req.body.full_name,
                description: req.body.description,
                birthday: req.body.birthday,
                city: req.body.city,
                address: req.body.address,
            })
            return res.status(200)
                .json(
                    ResponseFormat.build(
                        userInfo,
                        "UserInfo updated successfully",
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
            await UserInfoService.delete(req.params.id)
            return res.status(200)
                .json(
                    ResponseFormat.build(
                        {},
                        "UserInfo deleted successfully",
                        200,
                        "success"
                    )
                )
        } catch (error) { 
            next(error)
        }
    }
}

export default new UserInfoController()