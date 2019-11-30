import { Model } from 'sequelize/types'

export default (sequelize, DataTypes) => {
    class Student extends Model {}

    Student.init({
        fullName: {
            allowNull: false,
            type: DataTypes.STRING(100),
        },
        shortName: {
            allowNull: false,
            type: DataTypes.STRING(100),
        },
        recordBook: {
            allowNull: false,
            type: DataTypes.STRING(30),
        }
    }, {
        sequelize,
        underscope: true,
        createdAt: false,
        updatedAt: false,
        deletedAt: 'deleted_date',
        paranoid: true,
        modelName: 'student',

        // freezeTableName: 'students',    

        name: {
            simple: 'student',
            plural: 'students',
        }
    })

    Student.associate = function (models) {
        Student.belongsTo(models.User, {
            onDelete: 'restrict',
            onUpdate: 'restrict',
        })
        Student.belongsTo(models.Group, {
            onDelete: 'restrict',
            onUpdate: 'restrict',
        })

        Student.hasMany(models.GraduationPaper, {
            onDelete: 'restrict',
            onUpdate: 'restrict',
        })
        Student.hasMany(models.TermPaper, {
            onDelete: 'restrict',
            onUpdate: 'restrict',
        })
        Student.hasMany(models.Request, {
            onDelete: 'restrict',
            onUpdate: 'restrict',
        })
        Student.hasMany(models.Practice, {
            onDelete: 'restrict',
            onUpdate: 'restrict',
        })
    }

    return Student
}