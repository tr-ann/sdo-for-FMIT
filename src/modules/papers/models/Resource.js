const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {

  class Resource extends Model {}

  Resource.init({
    path: {
      allowNull: false,
      type: DataTypes.STRING(2048),
    },
    originalName: {
      allowNull: false,
      type: DataTypes.STRING(2048),
      field: 'original_name',
    },
    currentName: {
      allowNull: false,
      type: DataTypes.STRING(2048),
      field: 'current_name',
    },
    size: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    mimeType: {
      allowNull: false,
      type: DataTypes.STRING(50),
      field: 'mime_type',
    },
    description: {
      type: DataTypes.TEXT,
    },
    attributes: {
      type: DataTypes.JSON,
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