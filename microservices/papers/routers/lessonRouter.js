import { Router } from 'express'
import LessonController from '../controllers/lessonController'

const router = Router()
const lessonController = new LessonController()

router.get('/:id', lessonController.readById);
router.post('/:id', lessonController.update);
router.delete('/:id', lessonController.destroy);
router.get('/', lessonController.readAll);
router.post('/', lessonController.create);

export default router;