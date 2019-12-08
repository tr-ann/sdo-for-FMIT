import { Model } from 'sequelize'

export default (sequelize, DataTypes) => {
    class UserRole extends Model {}

    UserRole.init({
        user_id: {
            allowNull: false,
            type: DataTypes.INTEGER,
        },
        role_id: {
            allowNull: false,
            type: DataTypes.INTEGER,
        }
    }, {
        sequelize,
        createdAt: false,
        updatedAt: false,
        deletedAt: 'deleted_date',
        paranoid: true,
        modelName: 'user_role',
        tableName: 'users_roles',        
    })

    UserRole.associate = function (models) {
        UserRole.belongsTo(models.user, {
            onDelete: 'restrict',
            onUpdate: 'restrict',
            foreignKey: 'user_id'
        })
        UserRole.belongsTo(models.role, {
            onDelete: 'restrict',
            onUpdate: 'restrict',
            foreignKey: 'role_id'
        })
    }
    
    return UserRole
}