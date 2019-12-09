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
        createdAt: false,
        updatedAt: false,
        deletedAt: 'deleted_date',
        paranoid: true,
        modelName: 'academic_rank',
    })

    AcademicRank.associate = function (models) {
        AcademicRank.hasMany(models.teacher, {
            onDelete: 'restrict',
            onUpdate: 'restrict',
            foreignKey: 'academic_rank_id',
            as: 'teachers',
        })
    }

    return AcademicRank;
}