module.exports = (sequelize, DataTypes) => {
    var User_Role = sequelize.define('user_role', {
        id: {
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
            type: sequelize.INTEGER,
        },
    }, {});
    User_Role.associate = function (models) { };
    return User_Role;
};