import { Model } from 'sequelize/types'

export default (sequelize, DataTypes) => {
    class StudyMode extends Model {}

    var StudyMode = sequelize.define('study_mode', {
        name: {
            allowNull: false,
            type: Sequelize.STRING(45),
        },
    }, {
        sequelize,
        underscope: true,
        createdAt: false,
        updatedAt: false,
        deletedAt: 'deleted_date',
        paranoid: true,
        modelName: 'studyMode',

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