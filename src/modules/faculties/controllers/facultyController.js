import FacultyService from '../services/FacultyService'
import InfoFacultyService from '../services/InfoFacultyService'
import helpers from '../../../helpers'

class facultyController {

    async create(req, res, next) {
        try {
            let faculty = await FacultyService.create({
                name: req.body.name,
                short_name: req.body.short_name,
            })
            
            await InfoFacultyService.create({
                faculty_id: faculty.id,
                description: req.body.description,
                phone_number: req.body.phone_number 
            })

            return res.status(201).json(helpers.ResponseFormat.build(
                faculty,
                "Faculty created successfully",
                201,
                "success"
            ))
        } catch (error) {
            next(error)
        }
    }

    async readAll(req, res, next) {
        try {
            let faculties = await FacultyService.readAll()

            return res.render("facultiesList", {faculties})
            
            // return res.status(200).json(helpers.ResponseFormat.build(
            //     faculties,
            //     "Faculties read successfully",
            //     200,
            //     "success"
            // ))
        } catch (error) {
             next(error)
        }
    }

    async readById(req, res, next) {
        try {
            let faculty = await FacultyService.readById(req.params.id)

            return res.status(200).json(helpers.ResponseFormat.build(
                faculty,
                "Faculty read successfully",
                200,
                "success"
            ))
        } catch (error) {
             next(error)
        }
    }

    async update(req, res, next) {
        try {
            let faculty = await FacultyService.update(req.params.id, {
                name:   req.body.name,
                short_name: req.body.short_name,
            })
            
            await InfoFacultyService.update(req.params.id,{
                faculty_id: req.params.id,
                description: req.body.description,
                phone_number: req.body.phone_number 
            })

            return res.status(200).json(helpers.ResponseFormat.build(
                faculty,
                "Faculty updated successfully",
                200,
                "success"
            ))
        } catch (error) {
            next(error)
        }
    }

    async destroy(req, res, next) {
        try {
            await FacultyService.destroy(req.params.id)

            return res.status(200).json(helpers.ResponseFormat.build(
                {},
                "Faculty deleted successfully",
                200,
                "success"
            ))
        } catch (error) {
             next(error)
        }
    }
}

export default new facultyController()