export default (sequelize, DataTypes) => {

    const RoomType = sequelize.define('room_type', {
        name: {
            allowNull: false,
            type: Sequelize.STRING(100),
        },
    }, {
        underscored: true,
        name: {
            singular: 'RoomType',
            plural: 'RoomTypes',
        },
    })

    RoomType.associate = function(models) {
        RoomType.hasMany(models.lecture_room, {
            onUpdate: 'cascade',
            onDelete: 'restrict',
        })
    }

    return RoomType;
};