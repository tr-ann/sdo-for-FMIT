const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {

	class StudentSubgroup extends Model {};

	StudentSubgroup.init({
		studentId: {
			allowNull: false,
			type: DataTypes.INTEGER,
			field: 'students_id'
		},
		subgroupId: {
			allowNull: false,
			type: DataTypes.INTEGER,
			field: 'subgroup_id'
		}
	}, {
		sequelize,
		charset: 'UTF8',
		engine: 'INNODB',
		createdAt: false,
		updatedAt: false,
		deletedAt: 'deleted_date',
		paranoid: true,
		modelName: 'StudentSubgroup',
		tableName: 'students_subgroups',
		name: {
		  singular: 'StudentSubgroup',
		  plural: 'StudentsSubgroups',
		},
	});

	return StudentSubgroup;
};