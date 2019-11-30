import { Model } from "sequelize/types";

export default (sequelize, DataTypes) => {

    class PracticeType extends Model {}

    PracticeType.init({
        name: {
            allowNull: false,
            unique: true,
            type: DataTypes.STRING(50),
        },
    }, {
        name: {
            singular: 'practiceType',
            plural: 'practiceTypes',
        },
        sequelize,
        underscored: true,
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
        })
    }

    return PracticeType;
};