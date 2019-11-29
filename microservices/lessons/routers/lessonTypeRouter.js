import { Router } from 'express'
import LessonTypeController from '../controllers/lessonTypeController'

const router = Router()
const lessonTypeController = new LessonTypeController()

router.get('/:id', lessonTypeController.readById);
router.post('/:id', lessonTypeController.update);
router.delete('/:id', lessonTypeController.destroy);
router.get('/', lessonTypeController.readAll);
router.post('/', lessonTypeController.create);

export default router;