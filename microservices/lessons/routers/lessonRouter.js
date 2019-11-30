import { Router } from 'express'
import LessonController from '../controllers/lessonController'

export default router = Router()

router.get('/:id', LessonController.readById)
router.post('/:id', LessonController.update)
router.delete('/:id', LessonController.destroy)
router.get('/', LessonController.readAll)
router.post('/', LessonController.create)