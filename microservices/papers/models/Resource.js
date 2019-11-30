import { Model } from 'sequelize'

export default (sequelize, DataTypes) => {
    class Resource extends Model {}

    var Resource = sequelize.define('resource', {
        description: {
            allowNull: false,
            type: Sequelize.STRING(100),
        },
    }, {
        sequelize,
        underscope: true,
        createdAt: false,
        updatedAt: false,
        deletedAt: 'deleted_date',
        paranoid: true,
        modelName: 'resource',

        name: {
            singular: 'resource',
            plural: 'resources',
        },
    });
    Resource.associate = function(models) {
        Resource.hasMany(models.users_info, {
            onUpdate: 'restrict',
            onDelete: 'restrict',
        })
        Resource.hasMany(models.term_paper, {
            onUpdate: 'restrict',
            onDelete: 'restrict',
        })
        Resource.hasMany(models.graduation_paper, {
            onUpdate: 'restrict',
            onDelete: 'restrict',
        })
        Resource.hasMany(models.practice, {
            onUpdate: 'restrict',
            onDelete: 'restrict',
        })
    };
    return Resource;
};