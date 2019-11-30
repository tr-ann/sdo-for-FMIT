import { Router } from 'express'
import LessonNumberController from '../controllers/lessonNumberController'

export default router = Router()

router.get('/:id', LessonNumberController.readById)
router.post('/:id', LessonNumberController.update)
router.delete('/:id', LessonNumberController.destroy)
router.get('/', LessonNumberController.readAll)
router.post('/', LessonNumberController.create)