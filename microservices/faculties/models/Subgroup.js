module.exports = (sequelize, DataTypes) => {
    var Subgroup = sequelize.define('subgroup', {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER,
        },
        name: {
            allowNull: false,
            type: Sequelize.STRING(20),
        },
        group_id: {
            allowNull: true,
            type: Sequelize.INTEGER,
        },
    }, {});
    Subgroup.associate = function(models) {
        // associations can be defined here
        /*Subgroup.hasMany(models.Comment,{
          foreignKey: 'userId',
          as: 'comments'
        });*/

    };
    return Subgroup;
};