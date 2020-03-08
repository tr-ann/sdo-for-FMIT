const LectureRoomService = require('../services/LectureRoomService');
const { responseFormat } = require('../../../helpers');

class LectureRoomController {

  async create(req, res, next) {
      
    let lectureRoom = await LectureRoomService.create({
      number: req.body.number,
      seatsCount: req.body.seatsCount,
      roomTypeId: req.body.roomTypeId,
      buildingId: req.body.buildingId,
    });
    
    res
      .status(201)
      .json(
        responseFormat.build(
          lectureRoom,
          "Lecture room created successfully",
          201,
          "success"
        )
      );
  }

  async readAll(req, res, next) {
      
    let lectureRooms = await LectureRoomService.readAll();
    
    res
      .status(200)
      .json(
        responseFormat.build(
          lectureRooms,
          "Lecture rooms read successfully",
          200,
          "success"
        )
      );
  }

  async readById(req, res, next) {
      
    let lectureRoom = await LectureRoomService.readById(req.params.id)

    res
      .status(200)
      .json(
        responseFormat.build(
          lectureRoom,
          "Lecture room read successfully",
          200,
          "success"
        )
      );
  }

  async update(req, res, next) {
      
    let lectureRoom = await LectureRoomService.update(
      req.params.id,
      {
        number: req.body.number,
        seatsCount: req.body.seatsCount,
        roomTypeId: req.body.roomTypeId,
        buildingId: req.body.buildingId,
      }
    );

    res
      .status(200)
      .json(
        responseFormat.build(
          lectureRoom,
          "Lecture room updated successfully",
          200,
          "success"
        )
      );
  }

  async destroy(req, res, next) {
      
    await LectureRoomService.destroy(req.params.id)

    res
      .status(200)
      .json(
        responseFormat.build(
          {},
          "Lecture room deleted successfully",
          200,
          "success"
        )
      );
  }
}

module.exports = new LectureRoomController();