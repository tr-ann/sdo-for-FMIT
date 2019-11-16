module.exports = (sequelize, DataTypes) => {
    var User = sequelize.define('user', {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER,
        },
        login: {
            allowNull: false,
            type: Sequelize.STRING(100),
        },
        password: {
            allowNull: false,
            type: Sequelize.STRING(200),
        },
    }, {});
    User.associate = function(models) {
      // associations can be defined here
      /*User.hasMany(models.Comment,{
        foreignKey: 'userId',
        as: 'comments'
      });*/
  
    };
    return User;
};