import { Model } from "sequelize/types";

export default (sequelize, DataTypes) => {

    class Organization extends Model {}

    Organization.init({
        name: {
            allowNull: false,
            unique: true,
            type: DataTypes.STRING(90),
        },
    }, {
        name: {
            singular: 'organization',
            plural: 'organizations',
        },
        sequelize,
        underscored: true,
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
        })
    }

    return Organization;
};