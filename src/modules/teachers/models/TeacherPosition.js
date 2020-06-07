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
		},
		departmentId: {
			allowNull: false,
			type: DataTypes.INTEGER,
			field: 'department_id'
		},
		rate: {
			allowNull: false,
			type: DataTypes.DOUBLE
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

	TeacherPosition.associate = (models) => {

		TeacherPosition.belongsTo(models.Teacher, {
      onUpdate: 'restrict',
      onDelete: 'restrict',
      foreignKey: 'teacherId',
      as: 'teacher',
		});
		
		TeacherPosition.belongsTo(models.Department, {
      onUpdate: 'restrict',
      onDelete: 'restrict',
      foreignKey: 'departmentId',
      as: 'department',
		});
		
		TeacherPosition.belongsTo(models.Position, {
      onUpdate: 'restrict',
      onDelete: 'restrict',
      foreignKey: 'positionId',
      as: 'position',
    });
	}
	
	return TeacherPosition;
	
};