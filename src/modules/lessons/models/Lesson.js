import { Model } from 'sequelize'

export default (sequelize, DataTypes) => {

    class Lesson extends Model {}

    Lesson.init({
        week_day: {
            allowNull: false,
            type: DataTypes.INTEGER,
        },
        group_id: DataTypes.INTEGER,
        subgroup_id: DataTypes.INTEGER,
        teacher_id: DataTypes.INTEGER,
        lesson_type_id: DataTypes.INTEGER,
        lecture_room_id: DataTypes.INTEGER,
        discipline_id: DataTypes.INTEGER,
        lesson_number_id: DataTypes.INTEGER,
    }, {
        sequelize,
        createdAt: false,
        updatedAt: false,
        deletedAt: "deleted_date",
        paranoid: true,
        modelName: 'lesson',
    })

    Lesson.associate = function(models) {
        Lesson.belongsTo(models.group, {
            onUpdate: 'restrict',
            onDelete: 'restrict',
            foreignKey: 'group_id',
            as: 'group',
        })
        Lesson.belongsTo(models.subgroup, {
            onUpdate: 'restrict',
            onDelete: 'restrict',
            foreignKey: 'subgroup_id',
            as: 'subgroup',
        })
        Lesson.belongsTo(models.teacher, {
            onUpdate: 'restrict',
            onDelete: 'restrict',
            foreignKey: 'teacher_id',
            as: 'teacher',
        })
        Lesson.belongsTo(models.lesson_type, {
            onUpdate: 'restrict',
            onDelete: 'restrict',
            foreignKey: 'lesson_type_id',
            as: 'lesson_type',
        })
        Lesson.belongsTo(models.lecture_room, {
            onUpdate: 'restrict',
            onDelete: 'restrict',
            foreignKey: 'lecture_room_id',
            as: 'lecture_room',
        })
        Lesson.belongsTo(models.discipline, {
            onUpdate: 'restrict',
            onDelete: 'restrict',
            foreignKey: 'discipline_id',
            as: 'discipline',
        })
        Lesson.belongsTo(models.lesson_number, {
            onUpdate: 'restrict',
            onDelete: 'restrict',
            foreignKey: 'lesson_number_id',
            as: 'lesson_number',
        })
    }
    
    return Lesson
}