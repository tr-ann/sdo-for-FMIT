const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
	
	class AcademicRank extends Model {};

	AcademicRank.init({
		name: {
			allowNull: false,
			type: DataTypes.STRING(150),
		},
	}, {
		sequelize,
		charset: 'UTF8',
		engine: 'INNODB',
		createdAt: false,
		updatedAt: false,
		deletedAt: 'deleted_date',
		paranoid: true,
		modelName: 'AcademicRank',
		tableName: 'academic_ranks',
		name: {
		  singular: 'AcademicRank',
		  plural: 'AcademicRanks',
		},
	});

	AcademicRank.associate = (models) => {

		AcademicRank.hasMany(models.Teacher, {
			foreignKey: 'academicRankId',
			as: 'teachers',
			onDelete: 'set null',
			onUpdate: 'cascade'
		});

	};

	return AcademicRank;
};