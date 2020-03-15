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
		shortName: {
			allowNull: false,
			type: DataTypes.STRING(100),
			field: 'short_name'
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

		Student.belongsToMany(models.Subgroup, {
			through: models.StudentSubgroup,
			foreignKey: 'studentId',
			as: 'subgroups',
			onDelete: 'restrict',
			onUpdate: 'cascade'
		});

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

		Student.hasMany(models.GraduationPaper, {
			foreignKey: 'studentId',
			as: 'graduationPapers',
			onDelete: 'restrict',
			onUpdate: 'restrict'
		});

		Student.hasMany(models.TermPaper, {
			foreignKey: 'studentId',
			as: 'termPapers',
			onDelete: 'restrict',
			onUpdate: 'restrict'
		});

		Student.hasMany(models.Request, {
			foreignKey: 'studentId',
			as: 'requests',
			onDelete: 'restrict',
			onUpdate: 'restrict'
		});

		Student.hasMany(models.Practice, {
			foreignKey: 'studentId',
			as: 'practices',
			onDelete: 'restrict',
			onUpdate: 'restrict'
		});

	};

	return Student;
};