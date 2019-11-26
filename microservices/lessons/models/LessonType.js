export default (sequelize, DataTypes) => {

    const LessonType = sequelize.define('lesson_type', {
        name: {
            allowNull: false,
            type: Sequelize.STRING(100),
        },
    }, {
        underscored: true,
        name: {
            singular: 'LessonType',
            plural: 'LessonTypes',
        },
    })

    LessonType.associate = function(models) {
        LessonType.hasMany(models.lesson, {
            onUpdate: 'cascade',
            onDelete: 'restrict',
        })
    }

    return LessonType;
};