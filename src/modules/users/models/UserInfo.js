import { Model } from 'sequelize'

export default (sequelize, DataTypes) => {
    class UserInfo extends Model {}

    UserInfo.init({
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
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
        createdAt: false,
        updatedAt: false,
        deletedAt: 'deleted_date',
        paranoid: true,
        modelName: 'user_info',
        tableName: 'users_info',
    })

    UserInfo.associate = function (models) {
        UserInfo.belongsTo(models.user, {
            onDelete: 'restrict',
            onUpdate: 'restrict',
            foreignKey: 'user_id',
            as: 'user'
        })
        UserInfo.belongsTo(models.resource, {
            onDelete: 'restrict',
            onUpdate: 'restrict',
            foreignKey: 'resource_id',
            as: 'resource'
        })
    }

    return UserInfo
}