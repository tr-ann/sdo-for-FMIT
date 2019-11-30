import { Router } from 'express'
import PracticeTypeController from '../controllers/practiceTypeController'

const router = Router()

router.get('/:id', PracticeTypeController.readById)
router.post('/:id', PracticeTypeController.update)
router.delete('/:id', PracticeTypeController.destroy)
router.get('/', PracticeTypeController.readAll)
router.post('/', PracticeTypeController.create)

export default router