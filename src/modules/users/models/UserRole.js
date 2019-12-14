import { Model } from 'sequelize'

export default (sequelize, DataTypes) => {
    class UserRole extends Model {}

    UserRole.init({}, {
        sequelize,
        createdAt: false,
        updatedAt: false,
        deletedAt: 'deleted_date',
        paranoid: true,
        modelName: 'user_role',
        tableName: 'users_roles',        
    })
    
    return UserRole
}