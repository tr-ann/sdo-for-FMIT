import { Model } from 'sequelize'

export default (sequelize, DataTypes) => {

    class LectureRoom extends Model {}

    LectureRoom.init({
        number: {
            allowNull: false,
            type: DataTypes.STRING(10),
        },
        seats_count: {
            allowNull: false,
            type: DataTypes.INTEGER,
        },
        room_type_id: {
            type: DataTypes.INTEGER,
        },
        building_id: {
            type: DataTypes.INTEGER,
        },
    }, {
        name: {
            singular: 'lectureRoom',
            plural: 'lectureRooms',
        },
        sequelize,
        underscored: true,
        createdAt: false,
        updatedAt: false,
        deletedAt: "deleted_date",
        paranoid: true,
        modelName: 'lecture_room',
    })

    LectureRoom.associate = function(models) {
        LectureRoom.belongsTo(models.room_type, {
            onUpdate: 'restrict',
            onDelete: 'restrict',
            foreignKey: 'room_type_id',
        })
        LectureRoom.belongsTo(models.building, {
            onUpdate: 'restrict',
            onDelete: 'restrict',
            foreignKey: 'building_id',
        })
        LectureRoom.hasMany(models.lesson, {
            onUpdate: 'restrict',
            onDelete: 'restrict',
            foreignKey: 'lecture_room_id',
        })
    }

    return LectureRoom;
};