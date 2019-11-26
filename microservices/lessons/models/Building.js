export default (sequelize, DataTypes) => {

    const Building = sequelize.define('building', {
        name: {
            allowNull: false,
            type: Sequelize.STRING(200),
        },
    }, {
        underscored: true,
        name: {
            singular: 'Building',
            plural: 'Buildings',
        },
    })
    
    Building.associate = function(models) {
        Building.hasMany(models.lecture_room, {
            onUpdate: 'cascade',
            onDelete: 'restrict',
        })
    }

    return Building;
};