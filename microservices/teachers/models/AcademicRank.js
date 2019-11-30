import { Model } from 'sequelize'

export default (sequelize, DataTypes) => {
    
    class AcademicRank extends Model {}

    AcademicRank.init({
        name: {
            allowNull: false,
            type: DataTypes.STRING(150),
        },
    }, {
        sequelize,
        underscope: true,
        createdAt: false,
        updatedAt: false,
        deletedAt: 'deleted_date',
        paranoid: true,
        modelName: 'academic_rank',
        name: {
            simple: 'academicRank',
            plural: 'academicRanks',
        }
    })

    AcademicRank.associate = function (models) {
        AcademicRank.hasMany(models.teacher, {
            onDelete: 'restrict',
            onUpdate: 'restrict',
        })
    }

    return AcademicRank;
}