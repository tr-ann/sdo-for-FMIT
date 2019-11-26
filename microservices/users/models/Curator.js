module.exports = (sequelize, DataTypes) => {
    var Curator = sequelize.define('curator', {}, {
        underscope: true,
        timestamp: true,
        name: {
            simple: 'carator',
            plural: 'curators',
        }
    });
    Curator.associate = function (models) {
        Curator.belongsTo(models.Teacher, {
            onDelete: 'restrict',
            onUpdate: 'cascade',
        });
        Curator.belongsTo(models.Group, {
            onDelete: 'restrict',
            onUpdate: 'cascade',
        });
    };
    return Curator;
};