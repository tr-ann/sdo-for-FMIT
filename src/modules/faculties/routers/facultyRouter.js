import { Router } from 'express'
import FacultyController from '../controllers/facultyController'
import FacultyService from '../services/FacultyService'
import { isAdminFilter } from '../../../loaders/filter'
import facultyValidation from '../validators/faculty-validation'
import expressJoi from 'express-joi'

const router = Router()

router.get('/create',isAdminFilter,  (req, res, next) => {
    res.render('facultyEdit', { currentUser: req.user })
    }
)
router.post('/:id/delete', isAdminFilter, FacultyController.destroy)
router.get('/:id/edit', isAdminFilter,  (req, res, next) => {
    FacultyService.readById(req.params.id)
    .then((faculty) => {
        res.render('facultyEdit', { currentUser: req.user, faculty: faculty })
    })
})
router.get('/:id',  FacultyController.readById)
router.post('/:id', isAdminFilter, FacultyController.update)
router.post('/:id', isAdminFilter, /*expressJoi.joiValidate(facultyValidation),*/  FacultyController.update)
//router.delete('/:id', FacultyController.destroy)
router.get('/', FacultyController.readAll)
router.post('/', isAdminFilter, /*expressJoi.joiValidate(facultyValidation),*/ FacultyController.create)

export default router