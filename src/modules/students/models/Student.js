const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
	
	class Student extends Model {};

	Student.init({
		userId: {
			allowNull: false,
			type: DataTypes.INTEGER,
			field: 'user_id'
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
		modelName: 'student',
	})

	Student.associate = function (models) {

		Student.belongsToMany(models.subgroup, {
			through: models.student_subgroup,
			foreignKey: 'studentId',
			as: 'subgroups',
			onDelete: 'cascade',
			onUpdate: 'cascade'
		});

		Student.belongsTo(models.user, {
			foreignKey: 'userId',
			as: 'user',
			onDelete: 'cascade',
			onUpdate: 'cascade'
		});

		Student.belongsTo(models.group, {
			foreignKey: 'groupId',
			as: 'group',
			onDelete: 'set null',
			onUpdate: 'cascade'
		});

		Student.hasMany(models.graduation_paper, {
			foreignKey: 'studentId',
			as: 'graduationPapers',
			onDelete: 'restrict',
			onUpdate: 'restrict'
		});

		Student.hasMany(models.term_paper, {
			foreignKey: 'studentId',
			as: 'termPapers',
			onDelete: 'restrict',
			onUpdate: 'restrict'
		});

		Student.hasMany(models.request, {
			foreignKey: 'studentId',
			as: 'requests',
			onDelete: 'restrict',
			onUpdate: 'restrict'
		});

		Student.hasMany(models.practice, {
			foreignKey: 'studentId',
			as: 'practices',
			onDelete: 'restrict',
			onUpdate: 'restrict'
		});

	}

	return Student;
}