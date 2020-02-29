import { Router } from 'express'
import LessonController from '../controllers/lessonController'
const { tryCatch } = require('../../../helpers');

const router = Router()

router.get('/:id', tryCatch(LessonController.readById))
router.post('/:id', LessonController.update)
router.delete('/:id', LessonController.destroy)
router.get('/', LessonController.readAll)
router.post('/', LessonController.create)

export default router