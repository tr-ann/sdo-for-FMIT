import { Model } from "sequelize/types";

export default (sequelize, DataTypes) => {

    class Status extends Model {}

    Status.init({
        name: {
            allowNull: false,
            unique: true,
            type: DataTypes.STRING(30),
        },
    }, {
        name: {
            singular: 'status',
            plural: 'statuses',
        },
        sequelize,
        underscored: true,
        createdAt: false,
        updatedAt: false,
        deletedAt: "deleted_date",
        paranoid: true,
        modelName: 'status',
        freezeTableName: 'statuses'
    })
    
    Status.associate = function(models) {
        Status.hasMany(models.request, {
            onUpdate: 'restrict',
            onDelete: 'restrict',
        })
        Status.hasMany(models.term_paper, {
            onUpdate: 'restrict',
            onDelete: 'restrict',
        })
        Status.hasMany(models.graduation_paper, {
            onUpdate: 'restrict',
            onDelete: 'restrict',
        })
        Status.hasMany(models.practice, {
            onUpdate: 'restrict',
            onDelete: 'restrict',
        })
    }

    return Status;
};