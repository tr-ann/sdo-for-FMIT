import { Router } from 'express'
import studentController from '../controllers/StudentController'

const router = Router()

router.get('/:id', [], studentController.readById);
router.post('/:id', studentController.update);
router.delete('/:id', studentController.destroy);
router.get('/', studentController.list);
router.post('/', studentController.create);

export default router