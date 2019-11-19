module.exports = (sequelize, DataTypes) => {
    var Faculty = sequelize.define('faculty', {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER,
        },
        name: {
            allowNull: false,
            type: Sequelize.STRING(100),
        },
        short_name: {
            allowNull: false,
            type: Sequelize.STRING(50),
        },
    }, {});
    Faculty.associate = function(models) {
      // associations can be defined here
      /*Faculty.hasMany(models.Comment,{
        foreignKey: 'userId',
        as: 'comments'
      });*/
  
    };
    return Faculty;
};