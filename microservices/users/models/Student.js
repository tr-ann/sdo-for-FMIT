module.exports = (sequelize, DataTypes) => {
    var Student = sequelize.define('student', {
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
    }, {
        underscope: true,
        timestamp: true, // надо??
        name: {
            simple: 'student',
            plural: 'students',
        }
    });
    Student.associate = function (models) {
        Student.belongsTo(models.User, {
            onDelete: 'restrict',
            onUpdate: 'cascade',
        });
        Student.belongsTo(models.Group, {
            onDelete: 'restrict',
            onUpdate: 'cascade',
        });

        Student.hasMany(models.GraduationPaper, {
            onDelete: 'restrict',
            onUpdate: 'cascade',
        });
        Student.hasMany(models.TermPaper, {
            onDelete: 'restrict',
            onUpdate: 'cascade',
        });
        Student.hasMany(models.Request, {
            onDelete: 'restrict',
            onUpdate: 'cascade',
        });
        Student.hasMany(models.Practice, {
            onDelete: 'restrict',
            onUpdate: 'cascade',
        });
    };
    return Student;
}