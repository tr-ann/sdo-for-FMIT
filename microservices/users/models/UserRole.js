module.exports = (sequelize, DataTypes) => {
    var UserRole = sequelize.define('user_role', {}, {
        underscope: true,
        timestamp: true, // надо??
        name: {
            simple: 'userRole',
            plural: 'userRoles',
        }
    });
    UserRole.associate = function (models) {
        UserRole.belongsTo(models.User, {
            onDelete: 'restrict',
            onUpdate: 'cascade',
        });
        UserRole.belongsTo(models.Role, {
            onDelete: 'restrict',
            onUpdate: 'cascade',
        });
    };
    return UserRole;
};