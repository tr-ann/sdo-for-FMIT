export default (sequelize, DataTypes) => {

    const Lesson = sequelize.define('lesson', {
        week_day: {
            allowNull: false,
            type: Sequelize.INTEGER,
        },
    }, {
        underscored: true,
        name: {
            singular: 'Lesson',
            plural: 'Lessons',
        },
    })

    Lesson.associate = function(models) {
        Lesson.belongsTo(models.group, {
            onUpdate: 'cascade',
            onDelete: 'restrict',
        })
        Lesson.belongsTo(models.subgroup, {
            onUpdate: 'cascade',
            onDelete: 'restrict',
        })
        Lesson.belongsTo(models.teacher, {
            onUpdate: 'cascade',
            onDelete: 'restrict',
        })
        Lesson.belongsTo(models.lesson_type, {
            onUpdate: 'cascade',
            onDelete: 'restrict',
        })
        Lesson.belongsTo(models.lecture_room, {
            onUpdate: 'cascade',
            onDelete: 'restrict',
        })
        Lesson.belongsTo(models.discipline, {
            onUpdate: 'cascade',
            onDelete: 'restrict',
        })
        Lesson.belongsTo(models.lesson_number, {
            onUpdate: 'cascade',
            onDelete: 'restrict',
        })
    }
    
    return Lesson;
};