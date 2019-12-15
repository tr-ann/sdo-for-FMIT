import { Router } from 'express'
import FacultyController from '../controllers/facultyController'
import FacultyService from '../services/FacultyService'
import facultyValidation from '../validators/faculty-validation'
import expressJoi from 'express-joi'

const router = Router()

router.get('/create', (req, res, next) => {
    res.render('facultyEdit', { currentUser: req.user })
    }
)
router.get('/:id/edit', (req, res, next) => {
    FacultyService.readById(req.params.id)
    .then((faculty) => {
        res.render('facultyEdit', { currentUser: req.user, faculty: faculty })
    })
})
router.get('/:id',  FacultyController.readById)
router.post('/:id', FacultyController.update)
router.post('/:id', /*expressJoi.joiValidate(facultyValidation),*/  FacultyController.update)
router.delete('/:id', FacultyController.destroy)
router.get('/', FacultyController.readAll)
router.post('/', /*expressJoi.joiValidate(facultyValidation),*/ FacultyController.create)

export default router