const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {

  class RoomType extends Model {};

  RoomType.init({
    name: {
      allowNull: false,
      type: DataTypes.STRING(100),
    },
  }, {
    sequelize,
    charset: 'UTF8',
    engine: 'INNODB',
    paranoid: true,
    createdAt: false,
    updatedAt: false,
    deletedAt: 'deleted_date',
    modelName: 'RoomType',
    tableName: 'room_types',
    name: {
      singular: 'RoomType',
      plural: 'RoomTypes',
    },
  });

  RoomType.associate = (models) => {
    RoomType.hasMany(models.LectureRoom, {
      onUpdate: 'restrict',
      onDelete: 'restrict',
      foreignKey: 'roomTypeId',
      as: 'lectureRooms',
    });
  };

  return RoomType;
};