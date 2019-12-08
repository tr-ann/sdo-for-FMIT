import { Router } from 'express'
import TermPaperController from '../controllers/termPaperController'

const router = Router()

router.get('/:id', TermPaperController.readById)
router.post('/:id', TermPaperController.update)
router.delete('/:id', TermPaperController.destroy)
router.get('/', TermPaperController.readAll)
router.post('/', TermPaperController.create)

export default router