import { Model } from 'sequelize'

export default (sequelize, DataTypes) => {
    class UserInfo extends Model {}

    UserInfo.init({
        user_id: {
            allowNull: true,
            type: DataTypes.INTEGER,
        },
        full_name: {
            allowNull: false,
            type: DataTypes.STRING(255),
        },
        email: {
            allowNull: false,
            type: DataTypes.STRING(255),
            validate: {
                isEmail: true,
            }
        },
        sex: {
            allowNull: false,
            type: DataTypes.STRING(10),
        },
        description: {
            allowNull: true,
            type: DataTypes.TEXT,
        },
        birthday: {
            allowNull: false,
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
        resource_id: {
            allowNull: true,
            type: DataTypes.INTEGER,
        }
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
            simple: 'UserInfo',
            plural: 'UsersInfo',
        }
    })

    UserInfo.associate = function (models) {
        UserInfo.belongsTo(models.user, {
            onDelete: 'restrict',
            onUpdate: 'restrict',
            foreignKey: 'user_id'
        })
        UserInfo.belongsTo(models.resource, {
            onDelete: 'restrict',
            onUpdate: 'restrict',
            foreignKey: 'resource_id'
        })
    }

    return UserInfo
}