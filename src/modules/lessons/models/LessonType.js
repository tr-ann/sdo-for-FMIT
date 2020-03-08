const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {

  class LessonType extends Model {};

  LessonType.init({
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
    modelName: 'LessonType',
    tableName: 'lesson_types',
    name: {
      singular: 'LessonType',
      plural: 'LessonTypes',
    },
  });

  LessonType.associate = (models) => {
    LessonType.hasMany(models.Lesson, {
      onUpdate: 'restrict',
      onDelete: 'restrict',
      foreignKey: 'lessonTypeId',
      as: 'lessons',
    });
  };

  return LessonType;
};