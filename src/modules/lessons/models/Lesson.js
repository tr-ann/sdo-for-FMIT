const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {

  class Lesson extends Model {};

  Lesson.init({
    weekDay: {
      allowNull: false,
      type: DataTypes.INTEGER,
      field: 'week_day',
    },
    groupId: {
      type: DataTypes.INTEGER,
      field: 'group_id',
    },
    subgroupId: {
      type: DataTypes.INTEGER,
      field: 'subgroup_id',
    },
    teacherId: {
      type: DataTypes.INTEGER,
      field: 'teacher_id',
    },
    lessonTypeId: {
      type: DataTypes.INTEGER,
      field: 'lesson_type_id',
    },
    lectureRoomId: {
      type: DataTypes.INTEGER,
      field: 'lecture_room_id',
    },
    disciplineId: {
      type: DataTypes.INTEGER,
      field: 'discipline_id',
    },
    lessonNumberId: {
      type: DataTypes.INTEGER,
      field: 'lesson_number_id',
    },
  }, {
    sequelize,
    charset: 'UTF8',
    engine: 'INNODB',
    paranoid: true,
    createdAt: false,
    updatedAt: false,
    deletedAt: 'deleted_date',
    modelName: 'Lesson',
    tableName: 'lessons',
    name: {
      singular: 'Lesson',
      plural: 'Lessons',
    },
  });

  Lesson.associate = (models) => {

    Lesson.belongsTo(models.Group, {
      onUpdate: 'restrict',
      onDelete: 'restrict',
      foreignKey: 'groupId',
      as: 'group',
    });

    Lesson.belongsTo(models.Subgroup, {
      onUpdate: 'restrict',
      onDelete: 'restrict',
      foreignKey: 'subgroupId',
      as: 'subgroup',
    });

    Lesson.belongsTo(models.Teacher, {
      onUpdate: 'restrict',
      onDelete: 'restrict',
      foreignKey: 'teacherId',
      as: 'teacher',
    });

    Lesson.belongsTo(models.LessonType, {
      onUpdate: 'restrict',
      onDelete: 'restrict',
      foreignKey: 'lessonTypeId',
      as: 'lessonType',
    });

    Lesson.belongsTo(models.LectureRoom, {
      onUpdate: 'restrict',
      onDelete: 'restrict',
      foreignKey: 'lectureRoomId',
      as: 'lectureRoom',
    });

    Lesson.belongsTo(models.Discipline, {
      onUpdate: 'restrict',
      onDelete: 'restrict',
      foreignKey: 'disciplineId',
      as: 'discipline',
    });

    Lesson.belongsTo(models.LessonNumber, {
      onUpdate: 'restrict',
      onDelete: 'restrict',
      foreignKey: 'lessonNumberId',
      as: 'lessonNumber',
    });
  };
  
  return Lesson;
};