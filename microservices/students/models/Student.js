import { Model } from 'sequelize'

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
        Student.belongsToMany(models.subgroup, {
            through: models.student_subgroup,
            onDelete: 'restrict',
            onUpdate: 'restrict',
        })

        Student.belongsTo(models.user, {
            onDelete: 'restrict',
            onUpdate: 'restrict',
        })
        Student.belongsTo(models.group, {
            onDelete: 'restrict',
            onUpdate: 'restrict',
        })

        Student.hasMany(models.graduation_paper, {
            onDelete: 'restrict',
            onUpdate: 'restrict',
        })
        Student.hasMany(models.term_paper, {
            onDelete: 'restrict',
            onUpdate: 'restrict',
        })
        Student.hasMany(models.request, {
            onDelete: 'restrict',
            onUpdate: 'restrict',
        })
        Student.hasMany(models.practice, {
            onDelete: 'restrict',
            onUpdate: 'restrict',
        })
    }

    return Student
}