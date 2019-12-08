import { Model } from 'sequelize'

export default (sequelize, DataTypes) => {

    class Lesson extends Model {}

    Lesson.init({
        week_day: {
            allowNull: false,
            type: DataTypes.INTEGER,
        },
        group_id: {
            type: DataTypes.INTEGER,
        },
        subgroup_id: {
            type: DataTypes.INTEGER,
        },
        teacher_id: {
            type: DataTypes.INTEGER,
        },
        lesson_type_id: {
            type: DataTypes.INTEGER,
        },
        lecture_room_id: {
            type: DataTypes.INTEGER,
        },
        discipline_id: {
            type: DataTypes.INTEGER,
        },
        lesson_number_id: {
            type: DataTypes.INTEGER,
        },
    }, {
        name: {
            singular: 'lesson',
            plural: 'lessons',
        },
        sequelize,
        underscored: true,
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
        })
        Lesson.belongsTo(models.subgroup, {
            onUpdate: 'restrict',
            onDelete: 'restrict',
            foreignKey: 'subgroup_id',
        })
        Lesson.belongsTo(models.teacher, {
            onUpdate: 'restrict',
            onDelete: 'restrict',
            foreignKey: 'teacher_id',
        })
        Lesson.belongsTo(models.lesson_type, {
            onUpdate: 'restrict',
            onDelete: 'restrict',
            foreignKey: 'lesson_type_id',
        })
        Lesson.belongsTo(models.lecture_room, {
            onUpdate: 'restrict',
            onDelete: 'restrict',
            foreignKey: 'lecture_room_id',
        })
        Lesson.belongsTo(models.discipline, {
            onUpdate: 'restrict',
            onDelete: 'restrict',
            foreignKey: 'discipline_id',
        })
        Lesson.belongsTo(models.lesson_number, {
            onUpdate: 'restrict',
            onDelete: 'restrict',
            foreignKey: 'lesson_number_id',
        })
    }
    
    return Lesson;
};