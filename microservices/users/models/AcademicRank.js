module.exports = (sequelize, DataTypes) => {
    var AcademicRank = sequelize.define('academic_rank', {
        name: {
            allowNull: false,
            type: sequelize.STRING(100),
        },
    }, {
        underscope: true,
        timestamp: true, // надо??
        name: {
            simple: 'academicRank',
            plural: 'academicRanks',
        }
    });
    AcademicRank.associate = function (models) {
        AcademicRank.hasMany(models.Teacher, {
            onDelete: 'restrict',
            onUpdate: 'cascade',
        });
    };
    return AcademicRank;
}