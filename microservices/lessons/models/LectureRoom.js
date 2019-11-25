export default (sequelize, DataTypes) => {

    const LectureRoom = sequelize.define('lecture_room', {
        number: {
            allowNull: false,
            type: Sequelize.STRING(10),
        },
        seats_count: {
            allowNull: false,
            type: Sequelize.INTEGER,
        },
    }, {
        underscored: true,
        name: {
            singular: 'LectureRoom',
            plural: 'LectureRooms',
        },
    })

    LectureRoom.associate = function(models) {
        LectureRoom.belongsTo(models.room_type, {
            onUpdate: 'cascade',
            onDelete: 'restrict',
        })
        LectureRoom.belongsTo(models.building, {
            onUpdate: 'cascade',
            onDelete: 'restrict',
        })
        LectureRoom.hasMany(models.lesson, {
            onUpdate: 'cascade',
            onDelete: 'restrict',
        })
    }

    return LectureRoom;
};