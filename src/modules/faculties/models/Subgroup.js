const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {

  class Subgroup extends Model {};

  Subgroup.init({
    name: {
      allowNull: false,
      type: DataTypes.STRING(20),
    },
    groupId: {
      type: DataTypes.INTEGER,
      field: 'group_id',
    },
  }, {
    sequelize,
    charset: 'UTF8',
    engine: 'INNODB',
    paranoid: true,
    createdAt: false,
    updatedAt: false,
    deletedAt: 'deleted_date',
    modelName: 'Subgroup',
    tableName: 'subgroups',
    name: {
      singular: 'Subgroup',
      plural: 'Subgroups',
    },
  });

  Subgroup.associate = (models) => {

    Subgroup.belongsTo(models.Group, {
      onUpdate: 'restrict',
      onDelete: 'restrict',
      foreignKey: 'groupId',
      as: 'group',
    });

    Subgroup.hasMany(models.Lesson, {
      onUpdate: 'restrict',
      onDelete: 'restrict',
      foreignKey: 'subgroupId',
      as: 'lessons',
    });
  };

  return Subgroup;
};