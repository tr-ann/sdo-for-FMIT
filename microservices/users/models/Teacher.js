module.exports = (sequelize, DataTypes) => {
    var Teacher = sequelize.define('teacher', {
        fullName: {
            allowNull: false,
            type: sequelize.STRING(100),
        },
        shortName: {
            allowNull: false,
            type: sequelize.STRING(100),
        },
    }, {
        underscope: true,
        timestamp: true, // надо??
        name: {
            simple: 'teacher',
            plural: 'teachers',
        }
    });
    Teacher.associate = function (models) {
        Teacher.belongsTo(models.User, {
            onDelete: 'restrict',
            onUpdate: 'cascade',
        });
        Teacher.belongsTo(models.Department, {
            onDelete: 'restrict',
            onUpdate: 'cascade',
        });
        Teacher.belongsTo(models.Position, {
            onDelete: 'restrict',
            onUpdate: 'cascade',
        });
        Teacher.belongsTo(models.AcademicRank, {
            onDelete: 'restrict',
            onUpdate: 'cascade',
        });
        Teacher.belongsTo(models.AcademicDegree, {
            onDelete: 'restrict',
            onUpdate: 'cascade',
        })

        Teacher.hasMany(models.GraduationPaper, {
            onDelete: 'restrict',
            onUpdate: 'cascade',
        });
        Teacher.hasMany(models.TermPaper, {
            onDelete: 'restrict',
            onUpdate: 'cascade',
        });
        Teacher.hasMany(models.Request, {
            onDelete: 'restrict',
            onUpdate: 'cascade',
        });
        Teacher.hasMany(models.Lesson, {
            onDelete: 'restrict',
            onUpdate: 'cascade',
        });
    };
    return Teacher;
}