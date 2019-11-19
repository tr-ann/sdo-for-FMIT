module.exports = (sequelize, DataTypes) => {
    var Specialty = sequelize.define('specialty', {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER,
        },
        code: {
            allowNull: false,
            type: Sequelize.STRING(20),
        },
        name: {
            allowNull: false,
            type: Sequelize.STRING(100),
        },
        short_name: {
            allowNull: false,
            type: Sequelize.STRING(60),
        },
    }, {});
    Specialty.associate = function(models) {
        // associations can be defined here
        /*Specialty.hasMany(models.Comment,{
          foreignKey: 'userId',
          as: 'comments'
        });*/

    };
    return Specialty;
};