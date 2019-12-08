import { Model } from 'sequelize'

export default (sequelize, DataTypes) => {

    class LessonType extends Model {}

    LessonType.init({
        name: {
            allowNull: false,
            type: DataTypes.STRING(100),
        },
    }, {
        sequelize,
        createdAt: false,
        updatedAt: false,
        deletedAt: "deleted_date",
        paranoid: true,
        modelName: 'lesson_type',
    })

    LessonType.associate = function(models) {
        LessonType.hasMany(models.lesson, {
            onUpdate: 'restrict',
            onDelete: 'restrict',
            foreignKey: 'lesson_type_id',
            as: 'lessons',
        })
    }

    return LessonType
}