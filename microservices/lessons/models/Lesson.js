import { Model } from 'sequelize'

export default (sequelize, DataTypes) => {

    class Lesson extends Model {}

    Lesson.init({
        week_day: {
            allowNull: false,
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
        })
        Lesson.belongsTo(models.subgroup, {
            onUpdate: 'restrict',
            onDelete: 'restrict',
        })
        Lesson.belongsTo(models.teacher, {
            onUpdate: 'restrict',
            onDelete: 'restrict',
        })
        Lesson.belongsTo(models.lesson_type, {
            onUpdate: 'restrict',
            onDelete: 'restrict',
        })
        Lesson.belongsTo(models.lecture_room, {
            onUpdate: 'restrict',
            onDelete: 'restrict',
        })
        Lesson.belongsTo(models.discipline, {
            onUpdate: 'restrict',
            onDelete: 'restrict',
        })
        Lesson.belongsTo(models.lesson_number, {
            onUpdate: 'restrict',
            onDelete: 'restrict',
        })
    }
    
    return Lesson;
};