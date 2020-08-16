const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
	
	class FinishedEducation extends Model {};

	FinishedEducation.init({
		name: {
			allowNull: false,
			type: DataTypes.STRING(100),
		},
	}, {
		sequelize,
		charset: 'UTF8',
    engine: 'INNODB',
    timestamps: false,
		modelName: 'FinishedEducation',
		tableName: 'finished_educations',
		name: {
		  singular: 'FinishedEducation',
		  plural: 'FinishedEducations',
		},
	});

	FinishedEducation.associate = (models) => {

		FinishedEducation.hasMany(models.StudentInfo, {
			foreignKey: 'finishedEducationId',
			as: 'students',
			onDelete: 'restrict',
			onUpdate: 'restrict'
    });
    
	};

	return FinishedEducation;
};