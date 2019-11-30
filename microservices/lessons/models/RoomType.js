import { Model } from 'sequelize'

export default (sequelize, DataTypes) => {

    class RoomType extends Model {}

    RoomType.init({
        name: {
            allowNull: false,
            type: Sequelize.STRING(100),
        },
    }, {
        name: {
            singular: 'roomType',
            plural: 'roomTypes',
        },
        sequelize,
        underscored: true,
        createdAt: false,
        updatedAt: false,
        deletedAt: "deleted_date",
        paranoid: true,
        modelName: 'room_type',
    })

    RoomType.associate = function(models) {
        RoomType.hasMany(models.lecture_room, {
            onUpdate: 'restrict',
            onDelete: 'restrict',
        })
    }

    return RoomType;
};