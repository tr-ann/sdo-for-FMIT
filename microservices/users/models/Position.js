module.exports = (sequelize, DataTypes) => {
    var Position = sequelize.define('position', {
        name: {
            allowNull: false,
            type: sequelize.STRING(100),
        },
    }, {
        underscope: true,
        timestamp: true, // надо??
        name: {
            simple: 'position',
            plural: 'positions',
        }
    });
    Position.associate = function (models) {
        Position.hasMany(models.Teacher, {
            onDelete: 'restrict',
            onUpdate: 'cascade',
        });
    };
    return Position;
}