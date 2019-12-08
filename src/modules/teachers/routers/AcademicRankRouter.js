import { Router } from 'express'
import AcademicRankController from '../controllers/TeacherController'

const router = Router()

router.get('/:id', AcademicRankController.readById)
router.post('/:id', AcademicRankController.update)
router.delete('/:id', AcademicRankController.destroy)
router.get('/', AcademicRankController.readAll)
router.post('/', AcademicRankController.create)

export default router