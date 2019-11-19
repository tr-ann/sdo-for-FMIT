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
    Phone.associate = function (models) {
        Phone.belongsTo(models.User, {
            foreignKey: 'user_id',
            as: 'user'                // этот метод вернет все телефоны юзера или одного юзера для данного телефона?
        })
    }
    return Phone;
}