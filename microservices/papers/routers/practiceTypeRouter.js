import { Router } from 'express'
import PracticeTypeController from '../controllers/practiceTypeController'

export default router = Router()

router.get('/:id', PracticeTypeController.readById)
router.post('/:id', PracticeTypeController.update)
router.delete('/:id', PracticeTypeController.destroy)
router.get('/', PracticeTypeController.readAll)
router.post('/', PracticeTypeController.create)