module.exports = (sequelize, DataTypes) => {
    var LessonType = sequelize.define('lesson_type', {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: sequelize.INTEGER,
        },
        name: {
            allowNull: false,
            type: sequelize.STRING(100),
        },
    }, {});
    LessonType.associate = function(models) {
        LessonType.hasMany(models.Lesson, {foreignKey: 'type_id', as: 'lessons'})
    };
    return LessonType;
};