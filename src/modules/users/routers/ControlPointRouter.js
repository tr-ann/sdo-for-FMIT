import { Router } from 'express'
import ControlPointController from '../controllers/ControlPointController'

const router = Router()

router.get('/:id', ControlPointController.readById)
router.post('/:id', ControlPointController.update)
router.delete('/:id', ControlPointController.destroy)
router.get('/', ControlPointController.readAll)
router.post('/', ControlPointController.create)

export default router