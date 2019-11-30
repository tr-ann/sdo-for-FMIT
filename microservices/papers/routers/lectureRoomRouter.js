import { Router } from 'express'
import LectureRoomController from '../controllers/lectureRoomController'

const router = Router()
const lectureRoomController = new LectureRoomController()

router.get('/:id', lectureRoomController.readById);
router.post('/:id', lectureRoomController.update);
router.delete('/:id', lectureRoomController.destroy);
router.get('/', lectureRoomController.readAll);
router.post('/', lectureRoomController.create);

export default router;