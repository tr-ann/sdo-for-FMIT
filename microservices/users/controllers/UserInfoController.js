import UserInfoService from '../services/UserInfoService'

const ResponseFormat = require('../../../core').ResponseFormat;

class UserInfoController {

    async create(req, res) {
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
            return res.status(error.status).json(error);
        }
    }

    async readAll(req, res) {
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
            return res.status(error.status).json(error)
        }
    }

    async readById(req, res) {
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
            return res.status(error.status).json(error)
        }
    }
    
    async update(req, res) {
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
             res.status(error.status).json(error)
        }
    }
    
    async destroy (req, res) {
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
            res.status(error.status).json(error)
        }
    }
}

export default new UserInfoController()