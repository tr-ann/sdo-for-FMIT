import { Model } from 'sequelize'

export default (sequelize, DataTypes) => {
    class UserInfo extends Model {}

    UserInfo.init({
        full_name: {
            allowNull: true,
            type: DataTypes.STRING(255),
        },
        description: {
            allowNull: true,
            type: DataTypes.TEXT,
        },
        birthday: {
            allowNull: true,
            type: DataTypes.DATE,
        },
        city: {
            allowNull: true,
            type: DataTypes.STRING(255),
        },
        address: {
            allowNull: true,
            type: DataTypes.STRING(255),
        },
    }, {
        sequelize,
        underscope: true,
        createdAt: false,
        updatedAt: false,
        deletedAt: 'deleted_date',
        paranoid: true,
        modelName: 'user_info',
        freezeTableName: 'users_info',
        name: {
            simple: 'userInfo',
            plural: 'usersInfo',
        }
    });

    UserInfo.associate = function (models) {
        UserInfo.belongsTo(models.user, {
            onDelete: 'restrict',
            onUpdate: 'restrict',
        });
        UserInfo.belongsTo(models.resource, {
            onDelete: 'restrict',
            onUpdate: 'restrict',
        })
    };

    return UserInfo;
}