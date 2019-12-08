import { Model } from 'sequelize'

export default (sequelize, DataTypes) => {
    class Group extends Model {}

    Group.init({
        number: {
            allowNull: false,
            type: DataTypes.STRING(4),
        },
        faculty_id: {
            allowNull: true,
            type: DataTypes.SMALLINT,
        },
        specialty_id: {
            allowNull: true,
            type: DataTypes.SMALLINT,
        },
        study_mode_id: {
            allowNull: true,
            type: DataTypes.SMALLINT,
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
            foreignKey: 'specialty_id',
            as: 'specialty'
        })
        Group.belongsTo(models.study_mode, {
            onUpdate: 'restrict',
            onDelete: 'restrict',
            foreignKey: 'study_mode_id',
            as: 'study_mode'
        })
        Group.belongsTo(models.faculty, {
            onUpdate: 'restrict',
            onDelete: 'restrict',
            foreignKey: 'faculty_id',
            as: 'faculty'
        })
        Group.belongsToMany(models.teacher, {
            through: models.curator,
            onUpdate: 'restrict',
            onDelete: 'restrict',
            foreignKey: 'group_id',
            otherKey: 'teacher_id',
            as: 'teachers'
        })
        Group.hasMany(models.student, {
            onUpdate: 'restrict',
            onDelete: 'restrict',
            foreignKey: 'group_id'
        })
        Group.hasMany(models.subgroup, {
            onUpdate: 'restrict',
            onDelete: 'restrict',
            foreignKey: 'group_id'
        })
        Group.hasMany(models.lesson, {
            onUpdate: 'restrict',
            onDelete: 'restrict',
            foreignKey: 'group_id'
        })
    };
    return Group;
};