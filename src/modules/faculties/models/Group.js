const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {

  class Group extends Model {};

  Group.init({
    number: {
      allowNull: false,
      type: DataTypes.STRING(4),
    },
    facultyId: {
      type: DataTypes.INTEGER,
      field: 'faculty_id',
    },
    specialtyId: {
      type: DataTypes.INTEGER,
      field: 'specialty_id',
    },
    studyModeId: {
      type: DataTypes.INTEGER,
      field: 'study_mode_id',
    },
  }, {
    sequelize,
    charset: 'UTF8',
    engine: 'INNODB',
    paranoid: true,
    createdAt: false,
    updatedAt: false,
    deletedAt: 'deleted_date',
    modelName: 'Group',
    tableName: 'groups',
    name: {
      singular: 'Group',
      plural: 'Groups',
    },
  });

  Group.associate = (models) => {

    Group.belongsTo(models.Specialty, {
      onUpdate: 'restrict',
      onDelete: 'restrict',
      foreignKey: 'specialtyId',
      as: 'specialty',
    });

    Group.belongsTo(models.StudyMode, {
      onUpdate: 'restrict',
      onDelete: 'restrict',
      foreignKey: 'studyModeId',
      as: 'studyMode',
    });

    Group.belongsTo(models.Faculty, {
      onUpdate: 'restrict',
      onDelete: 'restrict',
      foreignKey: 'facultyId',
      as: 'faculty',
    });

    Group.hasMany(models.Student, {
      onUpdate: 'restrict',
      onDelete: 'restrict',
      foreignKey: 'groupId',
      as: 'students',
    });
    
  };

  return Group;
};