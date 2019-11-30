import { Router } from 'express'
import SubgroupController from '../controllers/buildingController'

export default router = Router()

router.get('/:id', SubgroupController.readById)
router.post('/:id', SubgroupController.update)
router.delete('/:id', SubgroupController.destroy)
router.get('/', SubgroupController.readAll)
router.post('/', SubgroupController.create)