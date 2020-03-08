const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {

  class StudyMode extends Model {};

  StudyMode.init({
    name: {
      allowNull: false,
      type: DataTypes.STRING(45),
    },
  }, {
    sequelize,
    charset: 'UTF8',
    engine: 'INNODB',
    paranoid: true,
    createdAt: false,
    updatedAt: false,
    deletedAt: 'deleted_date',
    modelName: 'StudyMode',
    tableName: 'study_modes',
    name: {
      singular: 'StudyMode',
      plural: 'StudyModes',
    },
  });

  StudyMode.associate = (models) => {
    StudyMode.hasMany(models.Group, {
      onUpdate: 'restrict',
      onDelete: 'restrict',
      foreignKey: 'studyModeId',
      as: 'groups',
    });
  };

  return StudyMode;
};