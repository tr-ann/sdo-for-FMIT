import { Model } from 'sequelize'

export default (sequelize, DataTypes) => {

    class RoomType extends Model {}

    RoomType.init({
        name: {
            allowNull: false,
            type: DataTypes.STRING(100),
        },
    }, {
        sequelize,
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
            foreignKey: 'room_type_id',
            as: 'lecture_rooms',
        })
    }

    return RoomType
}