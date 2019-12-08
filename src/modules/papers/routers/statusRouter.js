import { Router } from 'express'
import StatusController from '../controllers/statusController'

const router = Router()

router.get('/:id', StatusController.readById)
router.post('/:id', StatusController.update)
router.delete('/:id', StatusController.destroy)
router.get('/', StatusController.readAll)
router.post('/', StatusController.create)

export default router