module.exports = (sequelize, DataTypes) => {
    var StudyMode = sequelize.define('study_mode', {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER,
        },
        name: {
            allowNull: false,
            type: Sequelize.STRING(45),
        },
    }, {});
    StudyMode.associate = function(models) {
        // associations can be defined here
        /*StudyMode.hasMany(models.Comment,{
          foreignKey: 'userId',
          as: 'comments'
        });*/

    };
    return StudyMode;
};