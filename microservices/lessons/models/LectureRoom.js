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
        })
        LectureRoom.belongsTo(models.building, {
            onUpdate: 'restrict',
            onDelete: 'restrict',
        })
        LectureRoom.hasMany(models.lesson, {
            onUpdate: 'restrict',
            onDelete: 'restrict',
        })
    }

    return LectureRoom;
};