import { Model } from 'sequelize'

export default (sequelize, DataTypes) => {
    class RoleUrl extends Model {}

    RoleUrl.init({
        role_id: {
            allowNull: false,
            type: DataTypes.INTEGER
        },
        url_id: {
            allowNull: false,
            type: DataTypes.INTEGER
        }
    }, {
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
            foreignKey: 'url_id'
        })
        RoleUrl.belongsTo(models.role, {
            onDelete: 'restrict',
            onUpdate: 'restrict',
            foreignKey: 'role_id'
        })
    }
    return RoleUrl;
};