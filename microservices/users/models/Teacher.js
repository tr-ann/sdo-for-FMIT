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
        Teacher.belongsToMany(models.Group, {
            through: Curator,
            foreignKey: 'teacher_id',
            as: 'teachers',
        })
    };
    return Teacher;
}