const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {

  class Organization extends Model {};

  Organization.init({
    name: {
      allowNull: false,
      unique: true,
      type: DataTypes.STRING(90),
    },
  }, {
    sequelize,
    charset: 'UTF8',
    engine: 'INNODB',
    paranoid: true,
    createdAt: false,
    updatedAt: false,
    deletedAt: 'deleted_date',
    modelName: 'Organization',
    tableName: 'organizations',
    name: {
      singular: 'Organization',
      plural: 'Organizations',
    },
  });
  
  Organization.associate = (models) => {
    Organization.hasMany(models.Practice, {
      onUpdate: 'restrict',
      onDelete: 'restrict',
      foreignKey: 'organizationId',
      as: 'practices',
    });
  };

  return Organization;
};