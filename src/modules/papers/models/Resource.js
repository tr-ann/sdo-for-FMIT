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

    Resource.hasMany(models.UserInfo, {
      onUpdate: 'restrict',
      onDelete: 'restrict',
      foreignKey: 'resourceId',
      as: 'userInfos',
    });

    Resource.hasMany(models.TermPaper, {
      onUpdate: 'restrict',
      onDelete: 'restrict',
      foreignKey: 'resourceId',
      as: 'termPapers',
    });

    Resource.hasMany(models.GraduationPaper, {
      onUpdate: 'restrict',
      onDelete: 'restrict',
      foreignKey: 'resourceId',
      as: 'graduationPapers',
    });

    Resource.hasMany(models.Practice, {
      onUpdate: 'restrict',
      onDelete: 'restrict',
      foreignKey: 'resourceId',
      as: 'practices',
    });
  };

  return Resource;
};