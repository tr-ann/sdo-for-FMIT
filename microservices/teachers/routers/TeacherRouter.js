import { Router } from 'express'
import teacherController from '../controllers/TeacherController'

const router = Router()

router.get('/:id', [], teacherController.readById)
router.post('/:id', teacherController.update)
router.delete('/:id', teacherController.destroy)
router.get('/', teacherController.list)
router.post('/', teacherController.create)

export default router