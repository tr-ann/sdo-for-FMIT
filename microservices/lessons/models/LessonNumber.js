import { Model } from "sequelize/types";

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
        name: {
            singular: 'lessonNumber',
            plural: 'lessonNumbers',
        },
        sequelize,
        underscored: true,
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
        })
    }

    return LessonNumber;
};