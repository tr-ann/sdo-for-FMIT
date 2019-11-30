import { Router } from 'express'
import DisciplineController from '../controllers/disciplineController'

const router = Router()

router.get('/:id', DisciplineController.readById)
router.post('/:id', DisciplineController.update)
router.delete('/:id', DisciplineController.destroy)
router.get('/', DisciplineController.readAll)
router.post('/', DisciplineController.create)

export default router