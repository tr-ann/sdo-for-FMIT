import { Model } from 'sequelize'

export default (sequelize, DataTypes) => {
    class StudyMode extends Model {}

    StudyMode.init({
        name: {
            allowNull: false,
            type: DataTypes.STRING(45),
        },
    }, {
        sequelize,
        createdAt: false,
        updatedAt: false,
        deletedAt: 'deleted_date',
        paranoid: true,
        modelName: 'study_mode',
    });
    StudyMode.associate = function(models) {
        StudyMode.hasMany(models.group, {
            onUpdate: 'restrict',
            onDelete: 'restrict',
            foreignKey: 'study_mode_id'
        })
    };
    return StudyMode;
};