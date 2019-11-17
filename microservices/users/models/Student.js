module.exports = (sequelize, DataTypes) => {
    var Student = sequelize.define('student', {
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
        recordBook: {
            allowNull: false,
            type: sequelize.STRING(30),
        }
    }, {});
    Student.associate = function (models) {
        Student.hasMany(models.GraduationPaper, {
            foreignKey: 'student_id',
            as: 'graduationPapers',
        });
        Student.hasMany(models.TermPaper, {
            foreignKey: 'student_id',
            as: 'termPapers',
        });
        Student.hasMany(models.Request, {
            foreignKey: 'student_id',
            as: 'requests',
        });
        Student.hasMany(models.Practice, {
            foreignKey: 'student_id',
            as: 'practices',
        });
        Student.belongsToMany(models.Subgroup, {
            through: Student_vs_Subgroup,
            foreignKey: 'student_id',
            as: 'students',
        })
    };
    return Student;
}