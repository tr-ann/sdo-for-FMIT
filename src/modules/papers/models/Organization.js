import { Model } from 'sequelize'

export default (sequelize, DataTypes) => {

    class Organization extends Model {}

    Organization.init({
        name: {
            allowNull: false,
            unique: true,
            type: DataTypes.STRING(90),
        },
    }, {
        sequelize,
        createdAt: false,
        updatedAt: false,
        deletedAt: "deleted_date",
        paranoid: true,
        modelName: 'organization',
    })
    
    Organization.associate = function(models) {
        Organization.hasMany(models.practice, {
            onUpdate: 'restrict',
            onDelete: 'restrict',
            foreignKey: 'organization_id',
            as: 'practices',
        })
    }

    return Organization
}