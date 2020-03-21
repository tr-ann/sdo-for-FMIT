const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {

  class InfoFaculty extends Model {}

  InfoFaculty.init({
    facultyId: {
			allowNull: false,
			type: DataTypes.INTEGER,
			field: 'faculty_id'
    },
    description: {
      type: DataTypes.TEXT,
    },
    phone: {
      allowNull: false,
      type: DataTypes.STRING(20),
      field: 'phone_number',
    },
  }, {
    sequelize,
    charset: 'UTF8',
    engine: 'INNODB',
    paranoid: true,
    createdAt: false,
    updatedAt: false,
    deletedAt: 'deleted_date',
    modelName: 'InfoFaculty',
    tableName: 'info_faculties',
    name: {
      singular: 'InfoFaculty',
      plural: 'InfoFaculties',
    },
  });

  InfoFaculty.associate = (models) => {
    InfoFaculty.belongsTo(models.Faculty, {
      onUpdate: 'cascade',
      onDelete: 'restrict',
      foreignKey: 'facultyId',
      as: 'faculty',
    });
  };

  return InfoFaculty;
};