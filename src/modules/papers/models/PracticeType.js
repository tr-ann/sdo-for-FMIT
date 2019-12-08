import { Model } from 'sequelize'

export default (sequelize, DataTypes) => {

    class PracticeType extends Model {}

    PracticeType.init({
        name: {
            allowNull: false,
            unique: true,
            type: DataTypes.STRING(50),
        },
    }, {
        sequelize,
        createdAt: false,
        updatedAt: false,
        deletedAt: "deleted_date",
        paranoid: true,
        modelName: 'practice_type',
    })
    
    PracticeType.associate = function(models) {
        PracticeType.hasMany(models.practice, {
            onUpdate: 'restrict',
            onDelete: 'restrict',
            foreignKey: 'practice_type_id',
            as: 'practices'
        })
    }

    return PracticeType
}