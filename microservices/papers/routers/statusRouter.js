import { Router } from 'express'
import StatusController from '../controllers/statusController'

export default router = Router()

router.get('/:id', StatusController.readById)
router.post('/:id', StatusController.update)
router.delete('/:id', StatusController.destroy)
router.get('/', StatusController.readAll)
router.post('/', StatusController.create)