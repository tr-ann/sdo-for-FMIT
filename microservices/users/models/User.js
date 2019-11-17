module.exports = (sequelize, DataTypes) => {
    var User = sequelize.define('user', {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: sequelize.INTEGER,
        },
        login: {
            allowNull: false,
            type: sequelize.STRING(100),
        },
        password: {
            allowNull: false,
            type: sequelize.STRING(100),
        },
    }, {});
    User.associate = function(models) {
      // associations can be defined here
        User.belongsToMany(models.Role, {
            through: User_Role,
            foreignKey: 'user_id',
            as: 'users',
        });
        User.hasMany(models.Phone, {
            foreignKey: 'user_id',
            as: 'phones',
        });
        User.hasOne(models.UserInfo, { foreingKey: 'user_id' });
        User.hasOne(models.Student, { foreingKey: 'user_id', onDelete: 'restrict' });
        User.hasOne(models.Teacher, { foreingKey: 'user_id', onDelete: 'restrict' });
    };
    return User;
};
