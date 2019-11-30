import { Model } from 'sequelize'

export default (sequelize, DataTypes) => {
    class StudyMode extends Model {}

    var StudyMode = sequelize.define('study_mode', {
        name: {
            allowNull: false,
            type: DataTypes.STRING(45),
        },
    }, {
        sequelize,
        underscope: true,
        createdAt: false,
        updatedAt: false,
        deletedAt: 'deleted_date',
        paranoid: true,
        modelName: 'study_mode',

        name: {
            singular: 'studyMode',
            plural: 'studyModes',
        },
    });
    StudyMode.associate = function(models) {
        StudyMode.hasMany(models.group, {
            onUpdate: 'restrict',
            onDelete: 'restrict',
        })
    };
    return StudyMode;
};