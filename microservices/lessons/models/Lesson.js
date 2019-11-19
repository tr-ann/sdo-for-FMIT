module.exports = (sequelize, DataTypes) => {
    var Lesson = sequelize.define('lesson', {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: sequelize.INTEGER,
        },
        /*
        Не уверен, как организовать возможность,
        где либо подгруппа NULL, либо группа NULL
        
        Не уверен, может ли быть обущен номер аудитории (может даже у спорт. зала есть)
        Также есть, например, небольшие помещения для уборщиц :)
        */
        week_day: {
            allowNull: false,
            type: sequelize.INTEGER,
        },
    }, {});
    Lesson.associate = function(models) {
        Lesson.belongsTo(models.Group, {foreignKey: 'group_id', as: 'group'})
        Lesson.belongsTo(models.Subgroup, {foreignKey: 'subgroup_id', as: 'subgroup'})
        Lesson.belongsTo(models.Teacher, {foreignKey: 'teacher_id', as: 'teacher'})
        Lesson.belongsTo(models.LessonType, {foreignKey: 'type_id', as: 'lessonType'})
        Lesson.belongsTo(models.LectureRoom, {foreignKey: 'room_id', as: 'lectureRoom'})
        Lesson.belongsTo(models.Discipline, {foreignKey: 'discipline_id', as: 'discipline'})
        Lesson.belongsTo(models.LessonNumber, {foreignKey: 'lesson_number_id', as: 'lessonNumber'})
    };
    return Lesson;
};