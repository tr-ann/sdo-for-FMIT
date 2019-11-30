import { Model } from 'sequelize/types'

export default (sequelize, DataTypes) => {
    class Teacher extends Model {}
    
    Teacher.init({
        fullName: {
            allowNull: false,
            type: DataTypes.STRING(255),
        },
        shortName: {
            allowNull: false,
            type: DataTypes.STRING(255),
        },
    }, {
        sequelize,
        underscope: true,
        createdAt: false,
        updatedAt: false,
        deletedAt: 'deleted_date',
        paranoid: true,
        modelName: 'teacher',
        name: {
            simple: 'teacher',
            plural: 'teachers',
        }
    })

    Teacher.associate = function (models) {
        Teacher.belongsTo(models.User, {
            onDelete: 'restrict',
            onUpdate: 'restrict',
        })
        Teacher.belongsTo(models.Department, {
            onDelete: 'restrict',
            onUpdate: 'restrict',
        })
        Teacher.belongsTo(models.Position, {
            onDelete: 'restrict',
            onUpdate: 'restrict',
        })
        Teacher.belongsTo(models.AcademicRank, {
            onDelete: 'restrict',
            onUpdate: 'restrict',
        })
        Teacher.belongsTo(models.AcademicDegree, {
            onDelete: 'restrict',
            onUpdate: 'restrict',
        })

        Teacher.hasMany(models.GraduationPaper, {
            onDelete: 'restrict',
            onUpdate: 'restrict',
        })
        Teacher.hasMany(models.TermPaper, {
            onDelete: 'restrict',
            onUpdate: 'restrict',
        })
        Teacher.hasMany(models.Request, {
            onDelete: 'restrict',
            onUpdate: 'restrict',
        })
        Teacher.hasMany(models.Lesson, {
            onDelete: 'restrict',
            onUpdate: 'restrict',
        })
    }

    return Teacher
}