module.exports = (sequelize, DataTypes) => {
    var LessonNumber = sequelize.define('lesson_number', {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: sequelize.INTEGER,
        },
        number: {
            allowNull: false,
            type: sequelize.INTEGER,
        },
        start_time1: {
            allowNull: false,
            type: sequelize.TIME,
        },
        end_time1: {
            allowNull: false,
            type: sequelize.TIME,
        },
        start_time2: {
            allowNull: false,
            type: sequelize.TIME,
        },
        end_time2: {
            allowNull: false,
            type: sequelize.TIME,
        },
    }, {});
    LessonNumber.associate = function(models) {
        LessonNumber.hasMany(models.Lesson, {foreignKey: 'lesson_number_id', as: 'lessons'})
    };
    return LessonNumber;
};