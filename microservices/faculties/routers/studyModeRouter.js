import { Router } from 'express'
import StudyModeController from '../controllers/buildingController'

export default router = Router()

router.get('/:id', StudyModeController.readById)
router.post('/:id', StudyModeController.update)
router.delete('/:id', StudyModeController.destroy)
router.get('/', StudyModeController.readAll)
router.post('/', StudyModeController.create)