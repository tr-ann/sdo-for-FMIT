import { Router } from 'express'
import SubgroupController from '../controllers/subgroupController'

const router = Router()

router.get('/:id', SubgroupController.readById)
router.post('/:id', SubgroupController.update)
router.delete('/:id', SubgroupController.destroy)
router.get('/', SubgroupController.readAll)
router.post('/', SubgroupController.create)

export default router