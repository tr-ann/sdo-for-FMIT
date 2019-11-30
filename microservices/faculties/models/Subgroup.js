import { Model } from 'sequelize'

export default (sequelize, DataTypes) => {
    class Subgroup extends Model {}

    var Subgroup = sequelize.define('subgroup', {
        name: {
            allowNull: false,
            type: DataTypes.STRING(20),
        },
        group_id: {
            allowNull: true,
            type: DataTypes.INTEGER,
        },
    }, {
        sequelize,
        underscope: true,
        createdAt: false,
        updatedAt: false,
        deletedAt: 'deleted_date',
        paranoid: true,
        modelName: 'subgroup',

        name: {
            singular: 'subgroup',
            plural: 'subgroups',
        },
    });
    Subgroup.associate = function(models) {
        Subgroup.belongsTo(models.group, {
            onUpdate: 'restrict',
            onDelete: 'restrict',
        })
        Subgroup.hasMany(models.lessons, {
            onUpdate: 'restrict',
            onDelete: 'restrict',
        })
    };
    return Subgroup;
};