const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {

  class Faculty extends Model {};

  Faculty.init({
    name: {
      allowNull: false,
      type: DataTypes.STRING(100),
    },
    shortName: {
      allowNull: false,
      type: DataTypes.STRING(50),
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
    modelName: 'Faculty',
    tableName: 'faculties',
    name: {
      singular: 'Faculty',
      plural: 'Faculties',
    },
  });

  Faculty.associate = (models) => {

    Faculty.hasMany(models.Group, {
      onUpdate: 'restrict',
      onDelete: 'restrict',
      foreignKey: 'facultyId',
      as: 'groups',
    });

    Faculty.hasOne(models.InfoFaculty, {
      onUpdate: 'restrict',
      onDelete: 'restrict',
      foreignKey: 'facultyId',
      as: 'infoFaculty',
    });
  };

  return Faculty;
};