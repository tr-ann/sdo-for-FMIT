import { Router } from 'express'
import ResourceController from '../controllers/resourceController'

const router = Router()

router.get('/:id', ResourceController.readById)
router.post('/:id', ResourceController.update)
router.delete('/:id', ResourceController.destroy)
router.get('/', ResourceController.readAll)
router.post('/', ResourceController.create)

export default router