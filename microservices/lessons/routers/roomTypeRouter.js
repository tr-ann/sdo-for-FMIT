import { Router } from 'express'
import RoomTypeController from '../controllers/roomTypeController'

const router = Router()

router.get('/:id', RoomTypeController.readById)
router.post('/:id', RoomTypeController.update)
router.delete('/:id', RoomTypeController.destroy)
router.get('/', RoomTypeController.readAll)
router.post('/', RoomTypeController.create)

export default router