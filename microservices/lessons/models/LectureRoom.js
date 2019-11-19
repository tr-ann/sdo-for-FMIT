module.exports = (sequelize, DataTypes) => {
    var LectureRoom = sequelize.define('lecture_room', {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: sequelize.INTEGER,
        },
        number: {
            allowNull: false,
            type: sequelize.STRING(10),
        },
        seats_count: {
            allowNull: false,
            type: sequelize.INTEGER,
        },
    }, {});
    LectureRoom.associate = function(models) {
        LectureRoom.belongsTo(models.RoomType, {foreignKey: 'type_id', as: 'roomType'})
        LectureRoom.belongsTo(models.Building, {foreignKey: 'building_id', as: 'building'})
        LectureRoom.hasMany(models.Lesson, {foreignKey: 'room_id', as: 'lessons'})
    };
    return LectureRoom;
};