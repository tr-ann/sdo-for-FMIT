import { Router } from 'express'
import LessonNumberController from '../controllers/lessonNumberController'

const router = Router()
const lessonNumberController = new LessonNumberController()

router.get('/:id', lessonNumberController.readById);
router.post('/:id', lessonNumberController.update);
router.delete('/:id', lessonNumberController.destroy);
router.get('/', lessonNumberController.readAll);
router.post('/', lessonNumberController.create);

export default router;