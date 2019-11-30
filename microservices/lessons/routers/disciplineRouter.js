import { Router } from 'express'
import DisciplineController from '../controllers/disciplineController'

export default router = Router()

router.get('/:id', DisciplineController.readById)
router.post('/:id', DisciplineController.update)
router.delete('/:id', DisciplineController.destroy)
router.get('/', DisciplineController.readAll)
router.post('/', DisciplineController.create)