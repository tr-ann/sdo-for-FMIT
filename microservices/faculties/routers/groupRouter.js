import { Router } from 'express'
import GroupController from '../controllers/buildingController'

export default router = Router()

router.get('/:id', GroupController.readById)
router.post('/:id', GroupController.update)
router.delete('/:id', GroupController.destroy)
router.get('/', GroupController.readAll)
router.post('/', GroupController.create)