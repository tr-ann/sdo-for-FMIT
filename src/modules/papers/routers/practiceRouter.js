import { Router } from 'express'
import PracticeController from '../controllers/practiceController'

const router = Router()

router.get('/:id', PracticeController.readById)
router.post('/:id', PracticeController.update)
router.delete('/:id', PracticeController.destroy)
router.get('/', PracticeController.readAll)
router.post('/', PracticeController.create)

export default router