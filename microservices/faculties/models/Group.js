module.exports = (sequelize, DataTypes) => {
    var Group = sequelize.define('group', {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER,
        },
        number: {
            allowNull: false,
            type: Sequelize.STRING(4),
        },
        faculty_id: {
            allowNull: true,
            type: Sequelize.SMALLINT,
        },
        specialty_id: {
            allowNull: true,
            type: Sequelize.SMALLINT,
        },
        study_mode_id: {
            allowNull: true,
            type: Sequelize.SMALLINT,
        },
    }, {});
    Group.associate = function(models) {
        // associations can be defined here
        /*Group.hasMany(models.Comment,{
          foreignKey: 'userId',
          as: 'comments'
        });*/

    };
    return Group;
};