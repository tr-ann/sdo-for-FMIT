const { Router } = require('express');
const LectureRoomController = require('../controllers/LectureRoomController');
const { tryCatch } = require('../../../helpers');

const router = Router();

router.get('/:id', tryCatch(LectureRoomController.readById));
router.post('/:id', tryCatch(LectureRoomController.update));
router.delete('/:id', tryCatch(LectureRoomController.destroy));
router.get('/', tryCatch(LectureRoomController.readAll));
router.post('/', tryCatch(LectureRoomController.create));

module.exports = router;