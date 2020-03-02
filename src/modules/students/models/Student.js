const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
	class Student extends Model {}

	Student.init({
		user_id: {
			allowNull: false,
			type: DataTypes.INTEGER,
		},
		group_id: {
			allowNull: false,
			type: DataTypes.INTEGER,
		},
		full_name: {
			allowNull: false,
			type: DataTypes.STRING(100),
		},
		short_name: {
			allowNull: false,
			type: DataTypes.STRING(100),
		},
		record_book: {
			allowNull: false,
			type: DataTypes.STRING(30),
		}
	}, {
		sequelize,
		createdAt: false,
		updatedAt: false,
		deletedAt: 'deleted_date',
		paranoid: true,
		modelName: 'student',
	})

	Student.associate = function (models) {
		Student.belongsToMany(models.subgroup, {
			through: models.student_subgroup,
			onDelete: 'restrict',
			onUpdate: 'restrict',
			otherKey: 'student_id',
			as: 'subgroups',
		})

		Student.belongsTo(models.user, {
			onDelete: 'restrict',
			onUpdate: 'restrict',
			foreignKey: 'user_id',
			as: 'user',
		})
		Student.belongsTo(models.group, {
			onDelete: 'restrict',
			onUpdate: 'restrict',
			foreignKey: 'group_id',
			as: 'group',
		})

		Student.hasMany(models.graduation_paper, {
			onDelete: 'restrict',
			onUpdate: 'restrict',
			foreignKey: 'student_id',
			as: 'graduation_papers',
		})
		Student.hasMany(models.term_paper, {
			onDelete: 'restrict',
			onUpdate: 'restrict',
			foreignKey: 'student_id',
			as: 'term_papers',
		})
		Student.hasMany(models.request, {
			onDelete: 'restrict',
			onUpdate: 'restrict',
			foreignKey: 'student_id',
			as: 'requests',
		})
		Student.hasMany(models.practice, {
			onDelete: 'restrict',
			onUpdate: 'restrict',
			foreignKey: 'student_id',
			as: 'practices',
		})
	}

	return Student
}