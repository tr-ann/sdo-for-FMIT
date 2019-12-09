import { Model } from 'sequelize'
import Hash from '../../../classes/hash'

export default (sequelize, DataTypes) => {
    
    class User extends Model {}

    User.init({
        login: {
            allowNull: false,
            type: DataTypes.STRING(100),
        },
        password: {
            allowNull: false,
            type: DataTypes.STRING(100),
        },
    }, {
        sequelize,
        createdAt: false,
        updatedAt: false,
        deletedAt: 'deleted_date',
        paranoid: true,
        modelName: 'user',
    })

    User.associate = function(models) {
        User.belongsToMany(models.role, {
            through: models.user_role,
            onDelete: 'restrict',
            onUpdate: 'restrict',
            foreignKey: 'user_id',
            otherKey: 'role_id',
            as: 'roles'
        })        
        User.hasMany(models.phone, {
            onDelete: 'restrict',
            onUpdate: 'restrict',
            foreignKey: 'user_id',
            as: 'phones',
        })
        User.hasOne(models.user_info, {
            onDelete: 'restrict',
            onUpdate: 'restrict',
            foreignKey: 'user_id',
            as: 'user_info',
        })
        User.hasOne(models.student, { 
            onDelete: 'restrict',
            onUpdate: 'restrict',
            foreignKey: 'user_id',
            as: 'student'
        })
        User.hasOne(models.teacher, {
            onDelete: 'restrict',
            onUpdate: 'restrict',
            foreignKey: 'user_id',
            as: 'teacher'
        })
    }

    User.prototype.validPassword = async function (password) {
        return await Hash.compare(password, this.password)
    }
    
    User.beforeCreate(
        (user, options) => user.password = Hash.get(user.password)
    )

    return User
}