import { Model } from 'sequelize/types'
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
    });

    User.associate = function(models) {
        User.hasMany(models.Phone, {
            onDelete: 'restrict',
            onUpdate: 'restrict',
        });
        User.hasOne(models.UserInfo, {
            onDelete: 'restrict',
            onUpdate: 'restrict',
        });
        User.hasOne(models.Student, { 
            onDelete: 'restrict',
            onUpdate: 'restrict',
        });
        User.hasOne(models.Teacher, {
            onDelete: 'restrict',
            onUpdate: 'restrict',
        });
    };

    User.prototype.validPassword = async function (password) {
        return await Hash.compare(password, this.password);
    };
    
    User.beforeCreate(
        async (user, options) => user.password = await Hash.get(user.password)
    );

    User.afterCreate(
        async (user, options) => await db.user_info.create({ user_id: user.id })
    )

    return User;
};
