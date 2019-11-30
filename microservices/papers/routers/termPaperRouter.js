import { Router } from 'express'
import TermPaperController from '../controllers/termPaperController'

const router = Router()
const termPaperController = new TermPaperController()

router.get('/:id', termPaperController.readById);
router.post('/:id', termPaperController.update);
router.delete('/:id', termPaperController.destroy);
router.get('/', termPaperController.readAll);
router.post('/', termPaperController.create);

export default router;