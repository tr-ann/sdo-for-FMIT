const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {

  class Department extends Model {};

  Department.init({
    name: {
      allowNull: false,
      type: DataTypes.STRING(100),
    },
    phone: {
      type: DataTypes.STRING(30),
    },
    facultyId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      field: 'faculty_id',
    },
    ownerId: {
      type: DataTypes.INTEGER,
      field: 'owner_id',
    },
    lectureRoomId: {
      type: DataTypes.INTEGER,
      field: 'lecture_room_id',
    },
  }, {
    sequelize,
    charset: 'UTF8',
    engine: 'INNODB',
    paranoid: true,
    createdAt: false,
    updatedAt: false,
    deletedAt: 'deleted_date',
    modelName: 'Department',
    tableName: 'departments',
    name: {
      singular: 'Department',
      plural: 'Departments',
    },
  });
  
  Department.associate = (models) => {

    Department.belongsTo(models.User, {
      onUpdate: 'restrict',
      onDelete: 'restrict',
      foreignKey: 'ownerId',
      as: "user",
    });

    Department.belongsTo(models.Faculty, {
      onUpdate: 'restrict',
      onDelete: 'restrict',
      foreignKey: 'facultyId',
      as: "faculty",
    });

    Department.belongsTo(models.LectureRoom, {
      onUpdate: 'restrict',
      onDelete: 'restrict',
      foreignKey: 'lectureRoomId',
      as: "lectureRoom",
    });

    Department.hasMany(models.Teacher, {
      onUpdate: 'restrict',
      onDelete: 'restrict',
      foreignKey: 'departmentId',
      as: "teachers",
    });
  }

  return Department;
};  