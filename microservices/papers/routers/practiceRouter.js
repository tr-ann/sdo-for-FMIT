import { Router } from 'express'
import PracticeController from '../controllers/practiceController'

export default router = Router()

router.get('/:id', PracticeController.readById)
router.post('/:id', PracticeController.update)
router.delete('/:id', PracticeController.destroy)
router.get('/', PracticeController.readAll)
router.post('/', PracticeController.create)