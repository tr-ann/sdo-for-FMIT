import { Router } from 'express'
import OrganizationController from '../controllers/termPaperController'

export default router = Router()

router.get('/:id', OrganizationController.readById)
router.post('/:id', OrganizationController.update)
router.delete('/:id', OrganizationController.destroy)
router.get('/', OrganizationController.readAll)
router.post('/', OrganizationController.create)