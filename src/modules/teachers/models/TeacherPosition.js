const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {

	class TeacherPosition extends Model {};
	
	TeacherPosition.init({
		teacherId: {
			allowNull: false,
			type: DataTypes.INTEGER,
			field: 'teacher_id'
		},
		positionId: {
			allowNull: false,
			type: DataTypes.INTEGER,
			field: 'position_id'
		}
	}, {
		sequelize,
		charset: 'UTF8',
		engine: 'INNODB',
		createdAt: false,
		updatedAt: false,
		deletedAt: 'deleted_date',
		paranoid: true,
		modelName: 'TeacherPosition',
		tableName: 'teachers_positions',
		name: {
		  singular: 'TeacherPosition',
		  plural: 'TeacherPositions',
		},
	});
	
	return TeacherPosition;
	
};