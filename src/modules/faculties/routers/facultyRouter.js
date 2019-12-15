import { Router } from 'express'
import FacultyController from '../controllers/facultyController'
import facultyValidation from '../validators/faculty-validation'
import expressJoi from 'express-joi'

const router = Router()

router.get('/:id/edit', FacultyController.readById)
router.get('/:id', FacultyController.readById)
router.post('/:id', /*expressJoi.joiValidate(facultyValidation),*/  FacultyController.update)
router.delete('/:id', FacultyController.destroy)
router.get('/', FacultyController.readAll)
router.post('/', /*expressJoi.joiValidate(facultyValidation),*/ FacultyController.create)

export default router