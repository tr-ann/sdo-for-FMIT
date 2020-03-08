const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {

  class GraduationPaper extends Model {};

  GraduationPaper.init({
    topic: {
      allowNull: false,
      type: DataTypes.STRING(50),
    },
    name: {
      allowNull: false,
      type: DataTypes.STRING(90),
    },
    description: {
      type: DataTypes.TEXT,
    },
    studentId: {
      type: DataTypes.INTEGER,
      field: 'student_id',
    },
    teacherId: {
      type: DataTypes.INTEGER,
      field: 'teacher_id',
    },
    statusId: {
      type: DataTypes.INTEGER,
      field: 'status_id',
    },
    resourceId: {
      type: DataTypes.INTEGER,
      field: 'resource_id',
    },
  }, {
    sequelize,
    charset: 'UTF8',
    engine: 'INNODB',
    paranoid: true,
    createdAt: false,
    updatedAt: false,
    deletedAt: 'deleted_date',
    modelName: 'GraduationPaper',
    tableName: 'graduation_papers',
    name: {
      singular: 'GraduationPaper',
      plural: 'GraduationPapers',
    },
  });
  
  GraduationPaper.associate = (models) => {

    GraduationPaper.belongsTo(models.Student, {
      onUpdate: 'restrict',
      onDelete: 'restrict',
      foreignKey: 'studentId',
      as: 'student',
    });

    GraduationPaper.belongsTo(models.Teacher, {
      onUpdate: 'restrict',
      onDelete: 'restrict',
      foreignKey: 'teacherId',
      as: 'teacher',
    });

    GraduationPaper.belongsTo(models.Status, {
      onUpdate: 'restrict',
      onDelete: 'restrict',
      foreignKey: 'statusId',
      as: 'status',
    });

    GraduationPaper.belongsTo(models.Resource, {
      onUpdate: 'restrict',
      onDelete: 'restrict',
      foreignKey: 'resourceId',
      as: 'resource',
    });
  };

  return GraduationPaper;
};