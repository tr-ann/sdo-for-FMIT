import { Model } from 'sequelize/types'

export default (sequelize, DataTypes) => {
    
    class AcademicDegree extends Model {}

    AcademicDegree.init({
        name: {
            allowNull: false,
            type: DataTypes.STRING(100),
        },
    }, {
        sequelize,
        underscope: true,
        createdAt: false,
        updatedAt: false,
        deletedAt: 'deleted_date',
        paranoid: true,
        modelName: 'academic_degree',
        name: {
            simple: 'academicDegree',
            plural: 'academicDegrees',
        }
    })

    AcademicDegree.associate = function (models) {
        AcademicDegree.hasMany(models.Teacher, {
            onDelete: 'restrict',
            onUpdate: 'restrict',
        })
    }

    return AcademicDegree;
}