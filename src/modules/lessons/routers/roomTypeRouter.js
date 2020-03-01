const { Router } = require('express');
const RoomTypeController = require('../controllers/RoomTypeController');
const { tryCatch } = require('../../../helpers');

const router = Router();

router.get('/:id', tryCatch(RoomTypeController.readById));
router.post('/:id', tryCatch(RoomTypeController.update));
router.delete('/:id', tryCatch(RoomTypeController.destroy));
router.get('/', tryCatch(RoomTypeController.readAll));
router.post('/', tryCatch(RoomTypeController.create));

module.exports = router;