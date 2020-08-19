const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
	
	class Student extends Model {};

	Student.init({
		userId: {
			allowNull: false,
			type: DataTypes.INTEGER,
			field: 'user_id',
			defaultValue: 0
		},
		groupId: {
			allowNull: false,
			type: DataTypes.INTEGER,
			field: 'group_id'
		},
		fullName: {
			allowNull: false,
			type: DataTypes.STRING(100),
			field: 'full_name'
		},
		recordBook: {
			allowNull: false,
			type: DataTypes.STRING(30),
			field: 'record_book'
		}
	}, {
		sequelize,
		charset: 'UTF8',
		engine: 'INNODB',
		createdAt: false,
		updatedAt: false,
		deletedAt: 'deleted_date',
		paranoid: true,
		modelName: 'Student',
		tableName: 'students',
		name: {
		  singular: 'Student',
		  plural: 'Students',
		},
	});

	Student.associate = (models) => {

		Student.belongsTo(models.User, {
			foreignKey: 'userId',
			as: 'user',
			onDelete: 'set default',
			onUpdate: 'cascade'
		});

		Student.belongsTo(models.Group, {
			foreignKey: 'groupId',
			as: 'group',
			onDelete: 'set null',
			onUpdate: 'cascade'
		});

		Student.hasOne(models.StudentInfo, {
			foreignKey: 'studentId',
			as: 'studentInfo',
			onDelete: 'restrict',
			onUpdate: 'restrict'
		});

	};

	return Student;
};