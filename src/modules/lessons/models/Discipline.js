const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {

  class Discipline extends Model {};

  Discipline.init({
    name: {
      allowNull: false,
      type: DataTypes.STRING(100),
    },
    shortName: {
      allowNull: false,
      type: DataTypes.STRING(20),
      field: 'short_name',
    },
  }, {
    sequelize,
    charset: 'UTF8',
    engine: 'INNODB',
    paranoid: true,
    createdAt: false,
    updatedAt: false,
    deletedAt: 'deleted_date',
    modelName: 'Discipline',
    tableName: 'disciplines',
    name: {
      singular: 'Discipline',
      plural: 'Disciplines',
    },
  });

  Discipline.associate = (models) => {
    Discipline.hasMany(models.Lesson, {
      onUpdate: 'restrict',
      onDelete: 'restrict',
      foreignKey: 'disciplineId',
      as: 'lessons',
    });
  };

  return Discipline;
};