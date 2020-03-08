const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {

  class Status extends Model {};

  Status.init({
    name: {
      allowNull: false,
      unique: true,
      type: DataTypes.STRING(30),
    },
  }, {
    sequelize,
    charset: 'UTF8',
    engine: 'INNODB',
    paranoid: true,
    createdAt: false,
    updatedAt: false,
    deletedAt: 'deleted_date',
    modelName: 'Status',
    tableName: 'statuses',
    name: {
      singular: 'Status',
      plural: 'Statuses',
    },
  });

  Status.associate = (models) => {

    Status.hasMany(models.Request, {
      onUpdate: 'restrict',
      onDelete: 'restrict',
      foreignKey: 'statusId',
      as: 'requests',
    });

    Status.hasMany(models.TermPaper, {
      onUpdate: 'restrict',
      onDelete: 'restrict',
      foreignKey: 'statusId',
      as: 'termPapers',
    });

    Status.hasMany(models.GraduationPaper, {
      onUpdate: 'restrict',
      onDelete: 'restrict',
      foreignKey: 'statusId',
      as: 'graduationPapers',
    });
    
    Status.hasMany(models.Practice, {
      onUpdate: 'restrict',
      onDelete: 'restrict',
      foreignKey: 'statusId',
      as: 'practices',
    });
  };

  return Status;
};