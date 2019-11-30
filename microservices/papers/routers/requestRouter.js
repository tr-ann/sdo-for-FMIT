import { Router } from 'express'
import RequestController from '../controllers/requestController'

export default router = Router()

router.get('/:id', RequestController.readById)
router.post('/:id', RequestController.update)
router.delete('/:id', RequestController.destroy)
router.get('/', RequestController.readAll)
router.post('/', RequestController.create)