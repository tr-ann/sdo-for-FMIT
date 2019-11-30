import { Router } from 'express'
import SpecialtyController from '../controllers/buildingController'

const router = Router()

router.get('/:id', SpecialtyController.readById)
router.post('/:id', SpecialtyController.update)
router.delete('/:id', SpecialtyController.destroy)
router.get('/', SpecialtyController.readAll)
router.post('/', SpecialtyController.create)

export default router