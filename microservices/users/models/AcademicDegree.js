module.exports = (sequelize, DataTypes) => {
    var AcademicDegree = sequelize.define('academic_degree', {
        name: {
            allowNull: false,
            type: sequelize.STRING(100),
        },
    }, {
        underscope: true,
        timestamp: true, // надо??
        name: {
            simple: 'academicDegree',
            plural: 'academicDegrees',
        }
    });
    AcademicDegree.associate = function (models) {
        AcademicDegree.hasMany(models.Teacher, {
            onDelete: 'restrict',
            onUpdate: 'cascade',
        });
    };
    return AcademicDegree;
}