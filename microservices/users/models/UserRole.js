import { Model } from 'sequelize/types'

export default (sequelize, DataTypes) => {
    class UserRole extends Model {}

    UserRole.init({}, {
        sequelize,
        underscope: true,
        createdAt: false,
        updatedAt: false,
        deletedAt: 'deleted_date',
        paranoid: true,
        modelName: 'user_role',
        freezeTableName: 'users_roles',
        name: {
            simple: 'userRole',
            plural: 'userRoles',
        }
    })

    UserRole.associate = function (models) {
        UserRole.belongsTo(models.User, {
            onDelete: 'restrict',
            onUpdate: 'cascade',
        })
        UserRole.belongsTo(models.Role, {
            onDelete: 'restrict',
            onUpdate: 'cascade',
        })
    }
    return UserRole;
};