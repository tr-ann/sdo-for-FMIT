const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {

  class Staff extends Model {};

  Staff.init({
    rate: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    min: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    max: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    note: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    teacherId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'teacher_id'
    }
  }, {
    sequelize,
		charset: 'UTF8',
		engine: 'INNODB',
		createdAt: false,
		updatedAt: false,
		deletedAt: 'deleted_date',
		paranoid: true,
		modelName: 'Staff',
		tableName: 'staffs',
		name: {
		  singular: 'Staff',
		  plural: 'Staffs',
		},
  });

  Staff.associate = (models) => {

    Staff.belongsTo(models.Teacher, {
      foreignKey: 'teacherId',
      as: 'teacher',
			onDelete: 'restrict',
			onUpdate: 'restrict'
    });

    Staff.hasMany(models.TimeSheet, {
      foreignKey: 'staffId',
      as: 'timeSheets',
			onDelete: 'restrict',
			onUpdate: 'restrict'
    });

  };

  return Staff;
};