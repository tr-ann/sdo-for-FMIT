import { Model } from 'sequelize'

export default (sequelize, DataTypes) => {
    class UserInfo extends Model {}

    UserInfo.init({
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        userId: {
            allowNull: true,
            type: DataTypes.INTEGER,
            field: 'user_id'
        },
        firstName: {
            allowNull: false,
            type: DataTypes.STRING(100),
            field: 'first_name'
        },
        lastName: {
            allowNull: false,
            type: DataTypes.STRING(100),
            field: 'last_name'
        },
        middleName: {
            allowNull: true,
            type: DataTypes.STRING(100),
            field: 'middle_name'
        },
        email: {
            allowNull: false,
            type: DataTypes.STRING(255),
            validate: {
                isEmail: true
            }
        },
        sex: {
            allowNull: false,
            type: DataTypes.STRING(10)
        },
        description: {
            allowNull: true,
            type: DataTypes.TEXT
        },
        birthday: {
            allowNull: false,
            type: DataTypes.DATEONLY
        },
        city: {
            allowNull: true,
            type: DataTypes.STRING(255)
        },
        address: {
            allowNull: true,
            type: DataTypes.STRING(255)
        },
        resourceId: {
            allowNull: true,
            type: DataTypes.INTEGER,
            field: 'resource_id'
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
            foreignKey: 'userId',
            as: 'user'
        })
        UserInfo.belongsTo(models.resource, {
            onDelete: 'restrict',
            onUpdate: 'restrict',
            foreignKey: 'resourceId',
            as: 'resource'
        })
    }

    return UserInfo
}