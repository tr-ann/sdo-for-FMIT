import { Router } from 'express'
import LessonTypeController from '../controllers/lessonTypeController'

const router = Router()

router.get('/:id', LessonTypeController.readById)
router.post('/:id', LessonTypeController.update)
router.delete('/:id', LessonTypeController.destroy)
router.get('/', LessonTypeController.readAll)
router.post('/', LessonTypeController.create)

export default router