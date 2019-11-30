import { Model } from 'sequelize'

export default (sequelize, DataTypes) => {
    class RoleUrl extends Model {}

    RoleUrl.init({}, {
        sequelize,
        underscope: true,
        createdAt: false,
        updatedAt: false,
        deletedAt: 'deleted_date',
        paranoid: true,
        modelName: 'role_url',
        freezeTableName: 'roles_urls',
        name: {
            simple: 'roleUrl',
            plural: 'roleUrls',
        }
    })

    RoleUrl.associate = function (models) {
        RoleUrl.belongsTo(models.url, {
            onDelete: 'restrict',
            onUpdate: 'restrict',
        })
        RoleUrl.belongsTo(models.role, {
            onDelete: 'restrict',
            onUpdate: 'restrict',
        })
    }
    return RoleUrl;
};