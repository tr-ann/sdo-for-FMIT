module.exports = (sequelize, DataTypes) => {
    var AcademicDegree = sequelize.define('academic_degree', {
        id: {
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
            type: sequelize.INTEGER,
        },
        name: {
            allowNull: false,
            type: sequelize.STRING(100),
        },
    }, {});
    AcademicDegree.associate = function (models) {
        AcademicDegree.hasMany(models.Teacher, {
            foreignKey: 'academic_degree_id',
            as: 'teachers',
        });
    };
    return AcademicDegree;
}