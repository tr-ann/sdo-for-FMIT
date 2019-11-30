import { Router } from 'express'
import LessonNumberController from '../controllers/lessonNumberController'

const router = Router()

router.get('/:id', LessonNumberController.readById)
router.post('/:id', LessonNumberController.update)
router.delete('/:id', LessonNumberController.destroy)
router.get('/', LessonNumberController.readAll)
router.post('/', LessonNumberController.create)

export default router