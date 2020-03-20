const db = require('../../../dbModels');

class LectureRoomRepository {

  /**
   * This is a standard method to create an entity in a database
   * 
   * @param {Object} lectureRoom - body of lecture room that will be created
   * @return {Promise} promise with result of create
   */
  async create(lectureRoom) {
    return await db.LectureRoom.create(lectureRoom);
  }

  /**
   * This is a standard method to read an entity from a database
   * 
   * @param {Number} id - id of lecture room that will be read
   * @return {Promise} promise with result of create
   */
  async readById(id) {
    return await db.LectureRoom.findByPk(id, {
      attributes: [ 'id', 'number', 'seatsCount', 'roomTypeId', 'buildingId' ],
    });
  }

  /**
   * This is a standard method to read all the entities from a database
   * 
   * @return {Promise} promise with result of read
   */
  async readAll() {
    return await db.LectureRoom.findAll({
      attributes: [ 'id', 'number', 'seatsCount' ],
      include: [
        {
          model: db.RoomType,
          as: 'roomType',
          attributes: [ 'name' ],
        },
        {
          model: db.Building,
          as: 'building',
          attributes: [ 'name', 'address' ],
        },
      ]
    });
  }

  /**
   * This is a standard method to update an entity from a database
   * 
   * @param {Number} id - id of lecture room that will be updated
   * @param {Object} lectureRoom - body of lecture room that will be updated
   * @return {Promise} promise with result of update
   */
  async update(id, lectureRoom) {
    return await db.LectureRoom.update(lectureRoom, { where: { id } });
  }

  /**
   * This is a standard method to destroy an entity from a database
   * 
   * @param {Number} id - id of lecture room that will be destroyed
   * @return {Promise} promise with result of destroy
   */
  async destroy(id) {
    return await db.LectureRoom.destroy({ where: { id } });
  }

  /**
   * This method reads entities by description from a database
   * 
   * @param {Object} options - description to read entities
   * @return {Promise} promise with result of create
   */
  async get(options) {        
    return await db.LectureRoom.findAll(options);
  }
}

module.exports = new LectureRoomRepository();