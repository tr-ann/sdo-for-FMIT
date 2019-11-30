import { Model } from 'sequelize'

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
        UserRole.belongsTo(models.user, {
            onDelete: 'restrict',
            onUpdate: 'restrict',
        })
        UserRole.belongsTo(models.role, {
            onDelete: 'restrict',
            onUpdate: 'restrict',
        })
    }
    return UserRole;
};