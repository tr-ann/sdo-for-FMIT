import DepartmentService from '../services/DepartmentService'
import core from '../../../core'

class departmentController {

    async create(req, res) {
        try {
            let department = await DepartmentService.create({
                name: req.body.name,
                faculty_id: req.body.faculty_id,
                owner_id: req.body.owner_id,
                phone: req.body.phone,
                room_id: req.body.room_id,
            })
            
            return res.status(201).json(core.ResponseFormat.build(
                department,
                "Department created successfully",
                201,
                "success"
            ))
        } catch (error) {
            return res.status(error.status).json(error)
        }
    }

    async readAll(req, res) {
        try {
            let departments = await DepartmentService.readAll()
            
            return res.status(200).json(core.ResponseFormat.build(
                departments,
                "Departments read successfully",
                200,
                "success"
            ))
        } catch (error) {
            return res.status(error.status).json(error)
        }
    }

    async readById(req, res) {
        try {
            let department = await DepartmentService.readById(req.params.id)

            return res.status(200).json(core.ResponseFormat.build(
                department,
                "Department read successfully",
                200,
                "success"
            ))
        } catch (error) {
            return res.status(error.status).json(error)
        }
    }

    async update(req, res) {
        try {
            let department = await DepartmentService.update(req.params.id, {
                name: req.body.name,
                faculty_id: req.body.faculty_id,
                owner_id: req.body.owner_id,
                phone: req.body.phone,
                room_id: req.body.room_id,
            })

            return res.status(200).json(core.ResponseFormat.build(
                department,
                "Department updated successfully",
                200,
                "success"
            ))
        } catch (error) {
            return res.status(error.status).json(error)
        }
    }

    async destroy(req, res) {
        try {
            await DepartmentService.destroy(req.params.id)

            return res.status(200).json(core.ResponseFormat.build(
                {},
                "Department deleted successfully",
                200,
                "success"
            ))
        } catch (error) {
            return res.status(error.status).json(error)
        }
    }
}

export default new departmentController()