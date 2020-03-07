const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {

	class Teacher extends Model {};
	
	Teacher.init({
		userId: {
			allowNull: false,
			type: DataTypes.INTEGER,
			field: 'user_id'
		},
		fullName: {
			allowNull: false,
			type: DataTypes.STRING(255),
			field: 'full_name'
		},
		shortName: {
			allowNull: false,
			type: DataTypes.STRING(255),
			field: 'short_name'
		},
		departmentId: {
			allowNull: false,
			type: DataTypes.INTEGER,
			field: 'department_id'
		},
		academicDegreeId: {
			allowNull: false,
			type: DataTypes.INTEGER,
			field: 'academic_degree_id'
		},
		academicRankId: {
			allowNull: false,
			type: DataTypes.INTEGER,
			field: 'academic_rank_id'
		},
		positionId: {
			allowNull: false,
			type: DataTypes.INTEGER,
			field: 'position_id'
		}
	}, {
		sequelize,
		createdAt: false,
		updatedAt: false,
		deletedAt: 'deleted_date',
		paranoid: true,
		modelName: 'teacher',
	})

	Teacher.associate = function (models) {

		Teacher.belongsToMany(models.group, {
			through: models.curator,
			foreignKey: 'teacher_id',
			as: 'group',
			onDelete: 'cascade',
			onUpdate: 'cascade'
		});

		Teacher.belongsTo(models.user, {
			foreignKey: 'userId',
			as: 'user',
			onDelete: 'cascade',
			onUpdate: 'cascade'
		});

		Teacher.belongsTo(models.department, {
			foreignKey: 'departmentId',
			as: 'department',
			onDelete: 'set null',
			onUpdate: 'cascade'
		});

		Teacher.belongsTo(models.position, {
			foreignKey: 'positionId',
			as: 'position',
			onDelete: 'set null',
			onUpdate: 'cascade'
		});

		Teacher.belongsTo(models.academic_rank, {
			foreignKey: 'academicRankId',
			as: 'academicRank',
			onDelete: 'set null',
			onUpdate: 'cascade'
		});

		Teacher.belongsTo(models.academic_degree, {
			foreignKey: 'academicDegreeId',
			as: 'academicDegree',
			onDelete: 'set null',
			onUpdate: 'cascade'
		});

		Teacher.hasMany(models.graduation_paper, {
			foreignKey: 'teacherId',
			as: 'graduationPapers',
			onDelete: 'restrict',
			onUpdate: 'restrict'
		});

		Teacher.hasMany(models.term_paper, {
			foreignKey: 'teacherId',
			as: 'termPapers',
			onDelete: 'restrict',
			onUpdate: 'restrict'
		});

		Teacher.hasMany(models.request, {
			foreignKey: 'teacherId',
			as: 'requests',
			onDelete: 'restrict',
			onUpdate: 'restrict'
		});

		Teacher.hasMany(models.lesson, {
			foreignKey: 'teacherId',
			as: 'lessons',
			onDelete: 'restrict',
			onUpdate: 'restrict'
		});

	}

	return Teacher;
}