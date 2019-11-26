module.exports = (sequelize, DataTypes) => {
    var Phone = sequelize.define('phone', {
        phone: {
            allowNull: false,
            type: sequelize.STRING(30),
        },
    }, {
        underscope: true,
        timestamp: true, // надо??
        name: {
            simple: 'phone',
            plural: 'phones',
        }
    });
    Phone.associate = function (models) {
        Phone.belongsTo(models.User, {
            onDelete: 'restrict',
            onUpdate: 'cascade',
        })
    }
    return Phone;
}