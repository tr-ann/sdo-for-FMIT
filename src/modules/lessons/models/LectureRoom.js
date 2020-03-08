const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {

  class LectureRoom extends Model {};

  LectureRoom.init({
    number: {
      allowNull: false,
      type: DataTypes.STRING(10),
    },
    seatsCount: {
      allowNull: false,
      type: DataTypes.INTEGER,
      field: 'seats_count',
    },
    roomTypeId: {
      type: DataTypes.INTEGER,
      field: 'room_type_id',
    },
    buildingId: {
      type: DataTypes.INTEGER,
      field: 'building_id',
    },
  }, {
    sequelize,
    charset: 'UTF8',
    engine: 'INNODB',
    paranoid: true,
    createdAt: false,
    updatedAt: false,
    deletedAt: 'deleted_date',
    modelName: 'LectureRoom',
    tableName: 'lecture_rooms',
    name: {
      singular: 'LectureRoom',
      plural: 'LectureRooms',
    },
  });

  LectureRoom.associate = (models) => {

    LectureRoom.belongsTo(models.RoomType, {
      onUpdate: 'restrict',
      onDelete: 'restrict',
      foreignKey: 'roomTypeId',
      as: 'roomType',
    });

    LectureRoom.belongsTo(models.Building, {
      onUpdate: 'restrict',
      onDelete: 'restrict',
      foreignKey: 'buildingId',
      as: 'building',
    });

    LectureRoom.hasMany(models.Lesson, {
      onUpdate: 'restrict',
      onDelete: 'restrict',
      foreignKey: 'lectureRoomId',
      as: 'lessons',
    });
  };

  return LectureRoom;
};