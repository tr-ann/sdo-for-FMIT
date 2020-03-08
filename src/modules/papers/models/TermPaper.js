const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {

  class TermPaper extends Model {};

  TermPaper.init({
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
    modelName: 'TermPaper',
    tableName: 'term_papers',
    name: {
      singular: 'TermPaper',
      plural: 'TermPapers',
    },
  });
  
  TermPaper.associate = (models) => {

      TermPaper.belongsTo(models.Student, {
          onUpdate: 'restrict',
          onDelete: 'restrict',
          foreignKey: 'studentId',
          as: 'student',
      });

      TermPaper.belongsTo(models.Teacher, {
          onUpdate: 'restrict',
          onDelete: 'restrict',
          foreignKey: 'teacherId',
          as: 'teacher',
      });

      TermPaper.belongsTo(models.Status, {
          onUpdate: 'restrict',
          onDelete: 'restrict',
          foreignKey: 'statusId',
          as: 'status',
      });
      
      TermPaper.belongsTo(models.Resource, {
          onUpdate: 'restrict',
          onDelete: 'restrict',
          foreignKey: 'resourceId',
          as: 'resource',
      });
  };

  return TermPaper;
};