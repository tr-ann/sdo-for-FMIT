import { Router } from 'express'
import LectureRoomController from '../controllers/lectureRoomController'

const router = Router()

router.get('/:id', LectureRoomController.readById)
router.post('/:id', LectureRoomController.update)
router.delete('/:id', LectureRoomController.destroy)
router.get('/', LectureRoomController.readAll)
router.post('/', LectureRoomController.create)

export default router