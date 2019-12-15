import { Router } from 'express'
import FacultyController from '../controllers/facultyController'
import facultyValidation from '../validators/faculty-validation'
import expressJoi from 'express-joi'

const router = Router()

router.get('/:id/edit', (req, res, next) => {
    FacultyController.readById(req, res, next)
    res.render('facultyEdit', { currentUser: req.user, faculty: res.faculty })
})
router.get('/:id',  (req, res, next) => {
    FacultyController.readById(req, res, next)
    res.render('facultyInfo', { currentUser: req.user, faculty: res.faculty })
})
router.post('/:id', /*expressJoi.joiValidate(facultyValidation),*/  FacultyController.update)
router.delete('/:id', FacultyController.destroy)
router.get('/', FacultyController.readAll)
router.post('/', /*expressJoi.joiValidate(facultyValidation),*/ FacultyController.create)

export default router