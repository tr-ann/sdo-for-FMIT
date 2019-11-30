import { Router } from 'express'
import TermPaperController from '../controllers/termPaperController'

export default router = Router()

router.get('/:id', TermPaperController.readById)
router.post('/:id', TermPaperController.update)
router.delete('/:id', TermPaperController.destroy)
router.get('/', TermPaperController.readAll)
router.post('/', TermPaperController.create)