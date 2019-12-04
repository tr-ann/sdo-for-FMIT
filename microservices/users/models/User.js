import { Model } from 'sequelize'
import db from './'
import Hash from '../../../core/hash'

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
        underscope: true,
        createdAt: false,
        updatedAt: false,
        deletedAt: 'deleted_date',
        paranoid: true,
        modelName: 'user',

        // freezeTableName: 'users', 

        name: {
            simple: 'user',
            plural: 'users',
        }
    })

    User.associate = function(models) {
        User.belongsToMany(models.role, {
            through: models.user_role,
            onDelete: 'restrict',
            onUpdate: 'restrict'
        })        
        User.hasMany(models.phone, {
            onDelete: 'restrict',
            onUpdate: 'restrict',
        })
        User.hasOne(models.user_info, {
            onDelete: 'restrict',
            onUpdate: 'restrict',
        })
        User.hasOne(models.student, { 
            onDelete: 'restrict',
            onUpdate: 'restrict',
        })
        User.hasOne(models.teacher, {
            onDelete: 'restrict',
            onUpdate: 'restrict',
        })
    }

    User.prototype.validPassword = async function (password) {
        return await Hash.compare(password, this.password)
    }
    
    User.beforeCreate(
        async (user, options) => user.password = await Hash.get(user.password)
    )

    //User.afterCreate(
        /* ФИО(отчество не обязательное), телефон(не обязательно), email(обязательно), дата рождения(обязательно), пол(обязательное)  */
        /* добавить это в сервисы */
       // async (user, options) => await db.user_info.create({ user_id: user.id })        
    //)

    return User;
};
