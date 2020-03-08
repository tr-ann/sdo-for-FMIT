const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {

  class LessonNumber extends Model {};

  LessonNumber.init({
    number: {
        allowNull: false,
        type: DataTypes.INTEGER,
    },
    startTime1: {
        allowNull: false,
        type: DataTypes.TIME,
        field: 'start_time_1',
    },
    endTime1: {
        allowNull: false,
        type: DataTypes.TIME,
        field: 'end_time_1',
    },
    startTime2: {
        allowNull: false,
        type: DataTypes.TIME,
        field: 'start_time_2',
    },
    endTime2: {
        allowNull: false,
        type: DataTypes.TIME,
        field: 'end_time_2',
    },
  }, {
    sequelize,
    charset: 'UTF8',
    engine: 'INNODB',
    paranoid: true,
    createdAt: false,
    updatedAt: false,
    deletedAt: 'deleted_date',
    modelName: 'LessonNumber',
    tableName: 'lesson_numbers',
    name: {
      singular: 'LessonNumber',
      plural: 'LessonNumbers',
    },
  });

  LessonNumber.associate = (models) => {
    LessonNumber.hasMany(models.Lesson, {
      onUpdate: 'restrict',
      onDelete: 'restrict',
      foreignKey: 'lessonNumberId',
      as: 'lessons',
    });
  };

  return LessonNumber;
};