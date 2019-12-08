import { Model } from 'sequelize'

export default (sequelize, DataTypes) => {
    class Resource extends Model {}

    Resource.init({
        description: {
            allowNull: false,
            type: DataTypes.STRING(100),
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
        Resource.hasMany(models.user_info, {
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