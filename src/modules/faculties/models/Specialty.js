const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {

  class Specialty extends Model {};

  Specialty.init({
    code: {
      allowNull: false,
      type: DataTypes.STRING(20),
    },
    name: {
      allowNull: false,
      type: DataTypes.STRING(100),
    },
    shortName: {
      allowNull: false,
      type: DataTypes.STRING(60),
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
    modelName: 'Specialty',
    tableName: 'specialties',
    name: {
      singular: 'Specialty',
      plural: 'Specialties',
    },
  });

  Specialty.associate = (models) => {
    
    Specialty.hasMany(models.Group, {
      onUpdate: 'restrict',
      onDelete: 'restrict',
      foreignKey: 'specialtyId',
      as: 'groups',
    });

    Specialty.hasMany(models.Discipline, {
      onUpdate: 'restrict',
      onDelete: 'restrict',
      foreignKey: 'specialtyId',
      as: 'disciplines',
    });
    
  };

  return Specialty;
};