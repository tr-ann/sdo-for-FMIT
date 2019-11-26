export default (sequelize, DataTypes) => {
    
    const LessonNumber = sequelize.define('lesson_number', {
        number: {
            allowNull: false,
            type: Sequelize.INTEGER,
        },
        start_time_1: {
            allowNull: false,
            type: Sequelize.TIME,
        },
        end_time_1: {
            allowNull: false,
            type: Sequelize.TIME,
        },
        start_time_2: {
            allowNull: false,
            type: Sequelize.TIME,
        },
        end_time_2: {
            allowNull: false,
            type: Sequelize.TIME,
        },
    }, {
        underscored: true,
        name: {
            singular: 'LessonNumber',
            plural: 'LessonNumbers',
        },
    })

    LessonNumber.associate = function(models) {
        LessonNumber.hasMany(models.lesson, {
            onUpdate: 'cascade',
            onDelete: 'restrict',
        })
    }

    return LessonNumber;
};