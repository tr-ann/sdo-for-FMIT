import { Router } from 'express'
import LectureRoomController from '../controllers/lectureRoomController'

export default router = Router()

router.get('/:id', LectureRoomController.readById)
router.post('/:id', LectureRoomController.update)
router.delete('/:id', LectureRoomController.destroy)
router.get('/', LectureRoomController.readAll)
router.post('/', LectureRoomController.create)