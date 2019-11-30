import { Model } from 'sequelize'

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
        Teacher.belongsToMany(models.group, {
            through: models.curator,
            onDelete: 'restrict',
            onUpdate: 'restrict',
        })
        Teacher.belongsTo(models.user, {
            onDelete: 'restrict',
            onUpdate: 'restrict',
        })
        Teacher.belongsTo(models.department, {
            onDelete: 'restrict',
            onUpdate: 'restrict',
        })
        Teacher.belongsTo(models.position, {
            onDelete: 'restrict',
            onUpdate: 'restrict',
        })
        Teacher.belongsTo(models.academic_rank, {
            onDelete: 'restrict',
            onUpdate: 'restrict',
        })
        Teacher.belongsTo(models.academic_degree, {
            onDelete: 'restrict',
            onUpdate: 'restrict',
        })

        Teacher.hasMany(models.graduation_paper, {
            onDelete: 'restrict',
            onUpdate: 'restrict',
        })
        Teacher.hasMany(models.term_paper, {
            onDelete: 'restrict',
            onUpdate: 'restrict',
        })
        Teacher.hasMany(models.request, {
            onDelete: 'restrict',
            onUpdate: 'restrict',
        })
        Teacher.hasMany(models.lesson, {
            onDelete: 'restrict',
            onUpdate: 'restrict',
        })
    }

    return Teacher
}