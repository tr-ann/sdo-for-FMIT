import { Router } from 'express'
import LectureRoomController from '../controllers/lectureRoomController'
import IdValidator from '../../../validation/id-validation'
import LectureRoomValidator from '../validators/lecture-room-validator'
import expressJoi from 'express-joi'

const router = Router()

router.get('/:id', expressJoi.joiValidate(IdValidator), LectureRoomController.readById)
router.post('/:id', expressJoi.joiValidate(IdValidator, LectureRoomValidator), LectureRoomController.update)
router.delete('/:id', expressJoi.joiValidate(IdValidator), LectureRoomController.destroy)
router.get('/', LectureRoomController.readAll)
router.post('/', expressJoi.joiValidate(LectureRoomValidator), LectureRoomController.create)

export default router