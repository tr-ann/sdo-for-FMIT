import { Model } from 'sequelize'

export default (sequelize, DataTypes) => {
    
    class AcademicDegree extends Model {}

    AcademicDegree.init({
        name: {
            allowNull: false,
            type: DataTypes.STRING(100),
        },
    }, {
        sequelize,
        createdAt: false,
        updatedAt: false,
        deletedAt: 'deleted_date',
        paranoid: true,
        modelName: 'academic_degree',
    })

    AcademicDegree.associate = function (models) {
        AcademicDegree.hasMany(models.teacher, {
            onDelete: 'restrict',
            onUpdate: 'restrict',
            foreignKey: 'academic_degree_id',
            as: 'teachers',
        })
    }

    return AcademicDegree;
}