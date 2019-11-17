module.exports = (sequelize, DataTypes) => {
    var AcademicRank = sequelize.define('academic_rank', {
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
    AcademicRank.associate = function (models) {
        AcademicRank.hasMany(models.Teacher, {
            foreignKey: 'academic_rank_id',
            as: 'teachers',
        });
    };
    return AcademicRank;
}