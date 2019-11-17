module.exports = (sequelize, DataTypes) => {
    var Phone = sequelize.define('phone', {
        id: {
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
            type: sequelize.INTEGER,
        },
        phone: {
            allowNull: false,
            type: sequelize.STRING(30),
        },
    }, {});
    Phone.associate = function (models) { }
    return Phone;
}