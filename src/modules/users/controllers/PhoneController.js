import PhoneService from '../services/PhoneService'

const ResponseFormat = require('../../../helpers').ResponseFormat;

class PhoneController {

    async create(req, res, next) {
        try {
            const phone = await PhoneService.create({
                phone: req.body.phone
            });
            return res.status(201)
                .json(
                    ResponseFormat.build(
                        phone, 
                        "Phone created successfully", 
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
            let phones = await PhoneService.all()
            return res.status(200)
                .json(
                    ResponseFormat.build(
                        phones,
                        "Phones read successfully",
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
            let phone = PhoneService.findById(req.params.id)
            return res.status(200)
                .json(
                    ResponseFormat.build(
                        phone,
                        "Phone read successfully",
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
            let phone = await PhoneService.update(req.params.id, {
                phone: req.body.phone,
            })
            return res.status(200)
                .json(
                    ResponseFormat.build(
                        phone,
                        "Phone updated successfully",
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
            await PhoneService.delete(req.params.id)
            return res.status(200)
                .json(
                    ResponseFormat.build(
                        {},
                        "Phone deleted successfully",
                        200,
                        "success"
                    )
                )
        } catch (error) { 
            next(error)
        }
    }
}

export default new PhoneController()