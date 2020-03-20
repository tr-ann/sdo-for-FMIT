const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {

  class Building extends Model {};

  Building.init({
    name: {
      allowNull: false,
      type: DataTypes.STRING(100),
    },
    address: {
      allowNull: false,
      type: DataTypes.STRING(200),
    },
  }, {
    sequelize,
    charset: 'UTF8',
    engine: 'INNODB',
    paranoid: true,
    createdAt: false,
    updatedAt: false,
    deletedAt: 'deleted_date',
    modelName: 'Building',
    tableName: 'buildings',
    name: {
      singular: 'Building',
      plural: 'Buildings',
    },
  });
  
  Building.associate = (models) => {
    Building.hasMany(models.LectureRoom, {
      onUpdate: 'restrict',
      onDelete: 'restrict',
      foreignKey: 'buildingId',
      as: 'lectureRooms',
    });
  };

  return Building;
};