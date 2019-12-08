import { Model } from 'sequelize'

export default (sequelize, DataTypes) => {

    class LessonNumber extends Model {}

    LessonNumber.init({
        number: {
            allowNull: false,
            type: DataTypes.INTEGER,
        },
        start_time_1: {
            allowNull: false,
            type: DataTypes.TIME,
        },
        end_time_1: {
            allowNull: false,
            type: DataTypes.TIME,
        },
        start_time_2: {
            allowNull: false,
            type: DataTypes.TIME,
        },
        end_time_2: {
            allowNull: false,
            type: DataTypes.TIME,
        },
    }, {
        sequelize,
        createdAt: false,
        updatedAt: false,
        deletedAt: "deleted_date",
        paranoid: true,
        modelName: 'lesson_number',
    })

    LessonNumber.associate = function(models) {
        LessonNumber.hasMany(models.lesson, {
            onUpdate: 'restrict',
            onDelete: 'restrict',
            foreignKey: 'lesson_number_id',
            as: 'lessons',
        })
    }

    return LessonNumber
}