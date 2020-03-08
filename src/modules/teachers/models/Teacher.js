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
		charset: 'UTF8',
		engine: 'INNODB',
		createdAt: false,
		updatedAt: false,
		deletedAt: 'deleted_date',
		paranoid: true,
		modelName: 'Teacher',
		tableName: 'teachers',
		name: {
		  singular: 'Teacher',
		  plural: 'Teachers',
		},
	});

	Teacher.associate = (models) => {

		Teacher.belongsToMany(models.Group, {
			through: models.Curator,
			foreignKey: 'teacher_id',
			as: 'group',
			onDelete: 'cascade',
			onUpdate: 'cascade'
		});

		Teacher.belongsTo(models.User, {
			foreignKey: 'userId',
			as: 'user',
			onDelete: 'cascade',
			onUpdate: 'cascade'
		});

		Teacher.belongsTo(models.Department, {
			foreignKey: 'departmentId',
			as: 'department',
			onDelete: 'set null',
			onUpdate: 'cascade'
		});

		Teacher.belongsTo(models.Position, {
			foreignKey: 'positionId',
			as: 'position',
			onDelete: 'set null',
			onUpdate: 'cascade'
		});

		Teacher.belongsTo(models.AcademicRank, {
			foreignKey: 'academicRankId',
			as: 'academicRank',
			onDelete: 'set null',
			onUpdate: 'cascade'
		});

		Teacher.belongsTo(models.AcademicDegree, {
			foreignKey: 'academicDegreeId',
			as: 'academicDegree',
			onDelete: 'set null',
			onUpdate: 'cascade'
		});

		Teacher.hasMany(models.GraduationPaper, {
			foreignKey: 'teacherId',
			as: 'graduationPapers',
			onDelete: 'restrict',
			onUpdate: 'restrict'
		});

		Teacher.hasMany(models.TermPaper, {
			foreignKey: 'teacherId',
			as: 'termPapers',
			onDelete: 'restrict',
			onUpdate: 'restrict'
		});

		Teacher.hasMany(models.Request, {
			foreignKey: 'teacherId',
			as: 'requests',
			onDelete: 'restrict',
			onUpdate: 'restrict'
		});

		Teacher.hasMany(models.Lesson, {
			foreignKey: 'teacherId',
			as: 'lessons',
			onDelete: 'restrict',
			onUpdate: 'restrict'
		});

	};

	return Teacher;
};