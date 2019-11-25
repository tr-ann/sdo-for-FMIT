import { Router } from 'express'
import DisciplineController from '../controllers/disciplineController'

const router = Router()
const disciplineController = new DisciplineController()

router.get('/:id', disciplineController.readById);
router.post('/:id', disciplineController.update);
router.delete('/:id', disciplineController.destroy);
router.get('/', disciplineController.readAll);
router.post('/', disciplineController.create);

export default router;