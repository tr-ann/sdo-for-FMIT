module.exports = (sequelize, DataTypes) => {
    var RoomType = sequelize.define('room_type', {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: sequelize.INTEGER,
        },
        name: {
            allowNull: false,
            type: sequelize.STRING(100),
        },
    }, {});
    RoomType.associate = function(models) {
        RoomType.hasMany(models.LectureRoom, {foreignKey: 'type_id', as: 'lectureRooms'})
    };
    return RoomType;
};