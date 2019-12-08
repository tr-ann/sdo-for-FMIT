import { Router } from 'express'
import AcademicDegreeController from '../controllers/TeacherController'

const router = Router()

router.get('/:id', AcademicDegreeController.readById)
router.post('/:id', AcademicDegreeController.update)
router.delete('/:id', AcademicDegreeController.destroy)
router.get('/', AcademicDegreeController.readAll)
router.post('/', AcademicDegreeController.create)

export default router