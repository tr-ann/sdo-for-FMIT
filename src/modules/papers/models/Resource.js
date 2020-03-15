const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {

  class Resource extends Model {}

  Resource.init({
    description: {
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
    modelName: 'Resource',
    tableName: 'resources',
    name: {
      singular: 'Resource',
      plural: 'Resources',
    },
  });

  Resource.associate = (models) => {

    Resource.hasOne(models.UserInfo, {
      onUpdate: 'restrict',
      onDelete: 'restrict',
      foreignKey: 'photoId',
      as: 'userInfo',
    });

    Resource.hasOne(models.TermPaper, {
      onUpdate: 'restrict',
      onDelete: 'restrict',
      foreignKey: 'resourceId',
      as: 'termPaper',
    });

    Resource.hasOne(models.GraduationPaper, {
      onUpdate: 'restrict',
      onDelete: 'restrict',
      foreignKey: 'resourceId',
      as: 'graduationPaper',
    });

    Resource.hasOne(models.Practice, {
      onUpdate: 'restrict',
      onDelete: 'restrict',
      foreignKey: 'resourceId',
      as: 'practice',
    });
  };

  return Resource;
};