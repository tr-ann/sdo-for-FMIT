import { Model } from 'sequelize/types'

export default (sequelize, DataTypes) => {
    class UserInfo extends Model {}

    UserInfo.init({
        fullName: {
            allowNull: true,
            type: DataTypes.STRING(255),
        },
        description: {
            allowNull: true,
            type: DataTypes.TEXT,
        },
        birthday: {
            allowNull: true,
            type: DataTypes.TIMESTAMP,
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
            onUpdate: 'cascade',
        });
        UserInfo.belongsTo(models.Resource, {
            onDelete: 'restrict',
            onUpdate: 'cascade',
        })
    };

    return UserInfo;
}