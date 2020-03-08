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
		modelName: 'academic_rank',
	});

	AcademicRank.associate = function (models) {

		AcademicRank.hasMany(models.teacher, {
			foreignKey: 'academicRankId',
			as: 'teachers',
			onDelete: 'set null',
			onUpdate: 'cascade'
		});

	};

	return AcademicRank;
}