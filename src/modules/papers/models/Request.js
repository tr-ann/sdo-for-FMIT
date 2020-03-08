const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {

  class Request extends Model {};

  Request.init({
    topic: {
      allowNull: false,
      type: DataTypes.STRING(50),
    },
    name: {
      allowNull: false,
      type: DataTypes.STRING(90),
    },
    createDate: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      field: 'create_date',
    },
    updateDate: {
      type: DataTypes.DATEONLY,
      field: 'update_date',
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
  }, {
    sequelize,
    charset: 'UTF8',
    engine: 'INNODB',
    paranoid: true,
    createdAt: false,
    updatedAt: false,
    deletedAt: 'deleted_date',
    modelName: 'Request',
    tableName: 'requests',
    name: {
      singular: 'Request',
      plural: 'Requests',
    },
  });
  
  Request.associate = (models) => {
    
    Request.belongsTo(models.Student, {
      onUpdate: 'restrict',
      onDelete: 'restrict',
      foreignKey: 'studentId',
      as: 'student',
    });

    Request.belongsTo(models.Teacher, {
      onUpdate: 'restrict',
      onDelete: 'restrict',
      foreignKey: 'teacherId',
      as: 'teacher',
    });

    Request.belongsTo(models.Status, {
      onUpdate: 'restrict',
      onDelete: 'restrict',
      foreignKey: 'statusId',
      as: 'status',
    });
  };

  return Request;
};