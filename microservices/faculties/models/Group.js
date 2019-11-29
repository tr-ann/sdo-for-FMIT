export default (sequelize, DataTypes) => {
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
        underscored: true,
        name: {
            singular: 'Group',
            plural: 'Groups',
        },
    });
    Group.associate = function(models) {
        Group.belongsTo(models.specialty, {
            onUpdate: 'cascade',
            onDelete: 'restrict',
        })
        Group.belongsTo(models.study_mode, {
            onUpdate: 'cascade',
            onDelete: 'restrict',
        })
        Group.belongsTo(models.faculty, {
            onUpdate: 'cascade',
            onDelete: 'restrict',
        })
        Group.hasMany(models.curator, {//////????
            onUpdate: 'cascade',
            onDelete: 'restrict',
        })
        Group.hasMany(models.student, {
            onUpdate: 'cascade',
            onDelete: 'restrict',
        })
        Group.hasMany(models.subgroup, {
            onUpdate: 'cascade',
            onDelete: 'restrict',
        })
        Group.hasMany(models.lessons, {
            onUpdate: 'cascade',
            onDelete: 'restrict',
        })
    };
    return Group;
};