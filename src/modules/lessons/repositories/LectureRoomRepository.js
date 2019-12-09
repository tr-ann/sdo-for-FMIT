import db from '../../../classes/dbModels'

class LectureRoomRepository {

    /**
     * This is a standard method to create an entity in a database
     * 
     * @param {Object} lectureRoom - body of lecture room that will be created
     * @return {Promise} promise with result of create
     */
    async create(lectureRoom) {
        return await db.lecture_room.create(lectureRoom)
    }

    /**
     * This is a standard method to read an entity from a database
     * 
     * @param {Number} id - id of lecture room that will be read
     * @return {Promise} promise with result of create
     */
    async readById(id) {
        return await db.lecture_room.findByPk(id, {
            attributes: [ 'id', 'number', 'seats_count', 'room_type_id', 'building_id' ],
        })
    }

    /**
     * This is a standard method to read all the entities from a database
     * 
     * @return {Promise} promise with result of read
     */
    async readAll() {
        return await db.lecture_room.findAll({
            attributes: [ 'id', 'number', 'seats_count' ],
            include: [
                {
                    model: db.room_type,
                    as: 'room_type',
                    attributes: [ 'name' ],
                },
                {
                    model: db.building,
                    as: 'building',
                    attributes: [ 'name' ],
                },
            ]
        })
    }

    /**
     * This is a standard method to update an entity from a database
     * 
     * @param {Number} id - id of lecture room that will be updated
     * @param {Object} lectureRoom - body of lecture room that will be updated
     * @return {Promise} promise with result of update
     */
    async update(id, lectureRoom) {
        return await db.lecture_room.update(lectureRoom, {
            where: { id: id }
        })
    }

    /**
     * This is a standard method to destroy an entity from a database
     * 
     * @param {Number} id - id of lecture room that will be destroyed
     * @return {Promise} promise with result of destroy
     */
    async destroy(id) {
        return await db.lecture_room.destroy({
            where: { id: id }
        })
    }

    /**
     * This method reads entities by description from a database
     * 
     * @param {Object} options - description to read entities
     * @return {Promise} promise with result of create
     */
    async get(options) {        
        return await db.lecture_room.findAll(options)
    }
}

export default new LectureRoomRepository()