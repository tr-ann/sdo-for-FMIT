import { Router } from 'express'
import GraduationPaperController from '../controllers/graduationPaperController'

export default router = Router()

router.get('/:id', GraduationPaperController.readById)
router.post('/:id', GraduationPaperController.update)
router.delete('/:id', GraduationPaperController.destroy)
router.get('/', GraduationPaperController.readAll)
router.post('/', GraduationPaperController.create)