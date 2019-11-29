export default (sequelize, DataTypes) => {
    var Subgroup = sequelize.define('subgroup', {
        name: {
            allowNull: false,
            type: Sequelize.STRING(20),
        },
        group_id: {
            allowNull: true,
            type: Sequelize.INTEGER,
        },
    }, {
        underscored: true,
        name: {
            singular: 'Subgroup',
            plural: 'Subgroups',
        },
    });
    Subgroup.associate = function(models) {
        Subgroup.belongsTo(models.group, {
            onUpdate: 'cascade',
            onDelete: 'restrict',
        })
        Subgroup.hasMany(models.lessons, {
            onUpdate: 'cascade',
            onDelete: 'restrict',
        })
    };
    return Subgroup;
};