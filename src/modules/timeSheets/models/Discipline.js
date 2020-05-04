const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {

  class Discipline extends Model {}; 

  Discipline.init({
    subject: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    course: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    semester: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    form: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    timeSheet: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      field: 'time_sheet'
    },
    eng: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    specialtyId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'specialty_id'
    }
  }, {
    sequelize,
		charset: 'UTF8',
		engine: 'INNODB',
		createdAt: false,
		updatedAt: false,
		deletedAt: 'deleted_date',
		paranoid: true,
		modelName: 'Discipline',
		tableName: 'disciplines',
		name: {
		  singular: 'Discipline',
		  plural: 'Disciplines',
		},
  });

  Discipline.associate = (models) => {

    Discipline.belongsTo(models.Specialty, {
      foreignKey: 'specialtyId',
      as: 'specialty',
			onDelete: 'restrict',
			onUpdate: 'restrict'
    });

    Discipline.hasMany(models.TimeSheet, {
      foreignKey: 'disciplineId',
      as: 'timeSheets',
			onDelete: 'restrict',
			onUpdate: 'restrict'
    });

  };

  return Discipline;
};