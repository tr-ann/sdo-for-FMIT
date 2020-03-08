const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {

  class Practice extends Model {};

  Practice.init({
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
    organizationId: {
      type: DataTypes.INTEGER,
      field: 'organization_id',
    },
    statusId: {
      type: DataTypes.INTEGER,
      field: 'status_id',
    },
    practiceTypeId: {
      type: DataTypes.INTEGER,
      field: 'practice_type_id',
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
    modelName: 'Practice',
    tableName: 'practices',
    name: {
      singular: 'Practice',
      plural: 'Practices',
    },
  });
  
  Practice.associate = (models) => {

    Practice.belongsTo(models.Student, {
      onUpdate: 'restrict',
      onDelete: 'restrict',
      foreignKey: 'studentId',
      as: 'student',
    });

    Practice.belongsTo(models.Organization, {
      onUpdate: 'restrict',
      onDelete: 'restrict',
      foreignKey: 'organizationId',
      as: 'organization',
    });

    Practice.belongsTo(models.Status, {
      onUpdate: 'restrict',
      onDelete: 'restrict',
      foreignKey: 'statusId',
      as: 'status',
    });

    Practice.belongsTo(models.PracticeType, {
      onUpdate: 'restrict',
      onDelete: 'restrict',
      foreignKey: 'practiceTypeId',
      as: 'practiceType',
    });

    Practice.belongsTo(models.Resource, {
      onUpdate: 'restrict',
      onDelete: 'restrict',
      foreignKey: 'resourceId',
      as: 'resource',
    });
  };

  return Practice;
};