module.exports = (sequelize, DataTypes) => {
    var Discipline = sequelize.define('discipline', {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: sequelize.INTEGER,
        },
        name: {
            allowNull: false,
            type: sequelize.STRING(100),
        },
        short_name: {
            allowNull: false,
            type: sequelize.STRING(20),
        },
    }, {});
    Discipline.associate = function(models) {
        Discipline.hasMany(models.Lesson, {foreignKey: 'discipline_id', as: 'lessons'})
    };
    return Discipline;
};