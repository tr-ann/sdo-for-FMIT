module.exports = (sequelize, DataTypes) => {
    var UserInfo = sequelize.define('user_info', {
        description: {
            allowNull: false,
            type: sequelize.TEXT,
        },
        birthday: {
            allowNull: false,
            type: sequelize.TIMESTAMP,
        },
        city: {
            allowNull: false,
            type: sequelize.STRING,
        },
        address: {
            allowNull: false,
            type: sequelize.STRING,
        },
    }, {
        underscope: true,
        timestamp: true, // надо??
        name: {
            simple: 'userInfo',
            plural: 'usersInfo',
        }
    });
    UserInfo.associate = function (models) {
        UserInfo.belongsTo(models.user, {
            onDelete: 'restrict',
            onUpdate: 'cascade',
        });
        UserInfo.belongsTo(models.Resource, {
            onDelete: 'restrict',
            onUpdate: 'cascade',
        })
    };
    return UserInfo;
}