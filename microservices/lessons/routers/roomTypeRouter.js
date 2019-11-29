import { Router } from 'express'
import RoomTypeController from '../controllers/roomTypeController'

const router = Router()
const roomTypeController = new RoomTypeController()

router.get('/:id', roomTypeController.readById);
router.post('/:id', roomTypeController.update);
router.delete('/:id', roomTypeController.destroy);
router.get('/', roomTypeController.readAll);
router.post('/', roomTypeController.create);

export default router;