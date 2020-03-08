const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {

  class PracticeType extends Model {};

  PracticeType.init({
    name: {
      allowNull: false,
      unique: true,
      type: DataTypes.STRING(50),
    },
  }, {
    sequelize,
    charset: 'UTF8',
    engine: 'INNODB',
    paranoid: true,
    createdAt: false,
    updatedAt: false,
    deletedAt: 'deleted_date',
    modelName: 'PracticeType',
    tableName: 'practice_types',
    name: {
      singular: 'PracticeType',
      plural: 'PracticeTypes',
    },
  });
  
  PracticeType.associate = (models) => {
    PracticeType.hasMany(models.Practice, {
      onUpdate: 'restrict',
      onDelete: 'restrict',
      foreignKey: 'practiceTypeId',
      as: 'practices',
    });
  };

  return PracticeType;
};