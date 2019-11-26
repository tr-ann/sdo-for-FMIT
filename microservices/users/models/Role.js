module.exports = (sequelize, DataTypes) => {
    var Role = sequelize.define('role', {
        name: {
            allowNull: false,
            type: sequelize.STRING(100),
        },
    }, {
        underscope: true,
        timestamp: true, // надо??
        name: {
            simple: 'role',
            plural: 'roles',
        }
    });
    Role.associate = function (models) { };
    return Role;
}