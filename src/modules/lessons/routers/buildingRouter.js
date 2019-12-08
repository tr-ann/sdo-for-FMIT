import { Router } from 'express'
import BuildingController from '../controllers/buildingController'

const router = Router()

router.get('/:id', BuildingController.readById)
router.post('/:id', BuildingController.update)
router.delete('/:id', BuildingController.destroy)
router.get('/', BuildingController.readAll)
router.post('/', BuildingController.create)

export default router