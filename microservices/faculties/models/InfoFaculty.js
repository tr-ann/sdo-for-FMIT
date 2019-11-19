module.exports = (sequelize, DataTypes) => {
    var InfoFaculty = sequelize.define('info_faculty', {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER,
        },
        description: {
            allowNull: true,
            type: Sequelize.TEXT,
        },
        phone_number: {
            allowNull: false,
            type: Sequelize.STRING(20),
        },
    }, {});
    InfoFaculty.associate = function(models) {
        // associations can be defined here
        /*InfoFaculty.hasMany(models.Comment,{
          foreignKey: 'userId',
          as: 'comments'
        });*/

    };
    return InfoFaculty;
};