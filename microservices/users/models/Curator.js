module.exports = (sequelize, DataTypes) => {
    var Curator = sequelize.define('curator', {
        id: {
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
            type: sequelize.INTEGER,
        },
    }, {});
    Curator.associate = function (models) { };
    return Curator;
};