import { Model } from 'sequelize'

export default (sequelize, DataTypes) => {
    class Group extends Model {}

    var Group = sequelize.define('group', {
        number: {
            allowNull: false,
            type: Sequelize.STRING(4),
        },
        faculty_id: {
            allowNull: true,
            type: Sequelize.SMALLINT,
        },
        specialty_id: {
            allowNull: true,
            type: Sequelize.SMALLINT,
        },
        study_mode_id: {
            allowNull: true,
            type: Sequelize.SMALLINT,
        },
    }, {
        sequelize,
        underscope: true,
        createdAt: false,
        updatedAt: false,
        deletedAt: 'deleted_date',
        paranoid: true,
        modelName: 'group',

        name: {
            singular: 'group',
            plural: 'groups',
        },
    });
    Group.associate = function(models) {
        Group.belongsTo(models.specialty, {
            onUpdate: 'restrict',
            onDelete: 'restrict',
        })
        Group.belongsTo(models.study_mode, {
            onUpdate: 'restrict',
            onDelete: 'restrict',
        })
        Group.belongsTo(models.faculty, {
            onUpdate: 'restrict',
            onDelete: 'restrict',
        })
        Group.hasMany(models.curator, {//////????
            onUpdate: 'restrict',
            onDelete: 'restrict',
        })
        Group.hasMany(models.student, {
            onUpdate: 'restrict',
            onDelete: 'restrict',
        })
        Group.hasMany(models.subgroup, {
            onUpdate: 'restrict',
            onDelete: 'restrict',
        })
        Group.hasMany(models.lessons, {
            onUpdate: 'restrict',
            onDelete: 'restrict',
        })
    };
    return Group;
};