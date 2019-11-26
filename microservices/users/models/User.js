module.exports = (sequelize, DataTypes) => {
    var User = sequelize.define('user', {
        login: {
            allowNull: false,
            type: sequelize.STRING(100),
        },
        password: {
            allowNull: false,
            type: sequelize.STRING(100),
        },
    }, {
        underscope: true,
        timestamp: true, // надо??
        name: {
            simple: 'user',
            plural: 'users',
        }
    });
    User.associate = function(models) {
      // associations can be defined here
        User.hasMany(models.Phone, {
            onDelete: 'restrict',
            onUpdate: 'cascade',
        });
        User.hasOne(models.UserInfo, {
            onDelete: 'restrict',
            onUpdate: 'cascade',
        });
        User.hasOne(models.Student, { 
            onDelete: 'restrict',
            onUpdate: 'cascade',
        });
        User.hasOne(models.Teacher, {
            onDelete: 'restrict',
            onUpdate: 'cascade',
        });
    };
    return User;
};
