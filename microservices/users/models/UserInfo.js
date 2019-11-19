module.exports = (sequelize, DataTypes) => {
    var UserInfo = sequelize.define('user_info', {
        id: {
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
            type: sequelize.INTEGER,
        },
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
    }, {});
    UserInfo.associate = function (models) {
        UserInfo.belongsTo(models.User, {
            foreignKey: 'user_id',
            as: 'user',
        });
        UserInfo.belongsTo(models.Resource, {
            foreignKey: 'resource_id',
            as: 'resource',
        })
    };
    return UserInfo;
}