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
            as: 'phones',
            foreignKey: 'user_id'
        })
        User.hasOne(models.user_info, {
            onDelete: 'restrict',
            onUpdate: 'restrict',
            as: 'user_info',
            foreignKey: 'user_id'
        })
        User.hasOne(models.student, { 
            onDelete: 'restrict',
            onUpdate: 'restrict',
            foreignKey: 'user_id'
        })
        User.hasOne(models.teacher, {
            onDelete: 'restrict',
            onUpdate: 'restrict',
            foreignKey: 'user_id'
        })
    }

    User.prototype.validPassword = async function (password) {
        return await Hash.compare(password, this.password)
    }
    
    User.beforeCreate(
        async (user, options) => user.password = Hash.get(user.password)
    )

    return User
}