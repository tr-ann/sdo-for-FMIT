const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
	
	class AcademicDegree extends Model {};

	AcademicDegree.init({
		name: {
			allowNull: false,
			type: DataTypes.STRING(100),
		},
	}, {
		sequelize,
		charset: 'UTF8',
		engine: 'INNODB',
		createdAt: false,
		updatedAt: false,
		deletedAt: 'deleted_date',
		paranoid: true,
		modelName: 'academic_degree',
	});

	AcademicDegree.associate = (models) => {

		AcademicDegree.hasMany(models.teacher, {
			foreignKey: 'academicDegreeId',
			as: 'teachers',
			onDelete: 'set null',
			onUpdate: 'cascade'
		});
		
	};

	return AcademicDegree;
}