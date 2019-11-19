module.exports = (sequelize, DataTypes) => {
    var Position = sequelize.define('position', {
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
    Position.associate = function (models) {
        Position.hasMany(models.Teacher, {
            foreignKey: 'position_id',
            as: 'teachers',
        });
    };
    return Position;
}