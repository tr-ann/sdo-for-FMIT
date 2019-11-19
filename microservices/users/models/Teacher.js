module.exports = (sequelize, DataTypes) => {
    var Teacher = sequelize.define('teacher', {
        id: {
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
            type: sequelize.INTEGER,
        },
        fullName: {
            allowNull: false,
            type: sequelize.STRING(100),
        },
        shortName: {
            allowNull: false,
            type: sequelize.STRING(100),
        },
    }, {});
    Teacher.associate = function (models) {
        Teacher.belongsTo(models.User, {
            foreignKey: 'user_id',
            as: 'user',
        });
        Teacher.belongsTo(models.Department, {
            foreignKey: 'department_id',
            as: 'department',
        });
        Teacher.belongsTo(models.Position, {
            foreignKey: 'position_id',
            as: 'position',
        });
        Teacher.belongsTo(models.AcademicRank, {
            foreignKey: 'academic_rank_id',
            as: 'academicRank',
        });
        Teacher.belongsTo(models.AcademicDegree, {
            foreignKey: 'academic_degree_id',
            as: 'academicDegree',
        })

        Teacher.hasMany(models.GraduationPaper, {
            foreignKey: 'teacher_id',
            as: 'graduationPapers',
        });
        Teacher.hasMany(models.TermPaper, {
            foreignKey: 'teacher_id',
            as: 'termPapers',
        });
        Teacher.hasMany(models.Request, {
            foreignKey: 'teacher_id',
            as: 'requests',
        });
        Teacher.hasMany(models.Lesson, {
            foreignKey: 'teacher_id',
            as: 'lessons',
        });
        Teacher.belongsToMany(models.Group, {
            through: Curator,
            foreignKey: 'teacher_id',
            as: 'groups',                   //метод для получения всех групп этого препода или всех преподов для какой-то группы
        })
    };
    return Teacher;
}