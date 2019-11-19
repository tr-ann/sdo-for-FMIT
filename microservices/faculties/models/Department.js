module.exports = (sequelize, DataTypes) => {
    var Department = sequelize.define('department', {
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
        owner_id: {
            allowNull: true,
            type: Sequelize.INTEGER,
        },
        phone: {
            allowNull: true,
            type: Sequelize.STRING(30),
        },
        room_id: {
            allowNull: true,
            type: Sequelize.INTEGER,
        },
    }, {});
    Department.associate = function(models) {
        // associations can be defined here
        /*Department.hasMany(models.Comment,{
          foreignKey: 'userId',
          as: 'comments'
        });*/

    };
    return Department;
};