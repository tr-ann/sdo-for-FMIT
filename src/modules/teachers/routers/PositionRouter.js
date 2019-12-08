import { Router } from 'express'
import PositionController from '../controllers/TeacherController'

const router = Router()

router.get('/:id', PositionController.readById)
router.post('/:id', PositionController.update)
router.delete('/:id', PositionController.destroy)
router.get('/', PositionController.readAll)
router.post('/', PositionController.create)

export default router