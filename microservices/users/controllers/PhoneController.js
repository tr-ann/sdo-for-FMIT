import PhoneService from '../services/PhoneService'

const ResponseFormat = require('../../../core').ResponseFormat;

class PhoneController {

    async create(req, res) {
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
            return res.status(error.status).json(error);
        }
    }

    async readAll(req, res) {
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
            return res.status(error.status).json(error)
        }
    }

    async readById(req, res) {
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
            return res.status(error.status).json(error)
        }
    }
    
    async update(req, res) {
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
             res.status(error.status).json(error)
        }
    }
    
    async destroy (req, res) {
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
            res.status(error.status).json(error)
        }
    }
}

export default new PhoneController()