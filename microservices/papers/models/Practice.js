import { Model } from "sequelize/types";

export default (sequelize, DataTypes) => {

    class Practice extends Model {}

    Practice.init({
        topic: {
            allowNull: false,
            type: DataTypes.STRING(50),
        },
        name: {
            allowNull: false,
            type: DataTypes.STRING(90),
        },
        create_date: {
            type: DataTypes.DATEONLY,
            allowNull: false,
        },
        update_date: {
            type: DataTypes.DATEONLY,
            allowNull: false,
        },
        description: {
            type: DataTypes.TEXT
        },
    }, {
        name: {
            singular: 'practice',
            plural: 'practices',
        },
        sequelize,
        underscored: true,
        createdAt: false,
        updatedAt: false,
        deletedAt: "deleted_date",
        paranoid: true,
        modelName: 'practice',
    })
    
    Practice.associate = function(models) {
        Practice.belongsTo(models.student, {
            onUpdate: 'restrict',
            onDelete: 'restrict',
        })
        Practice.belongsTo(models.organization, {
            onUpdate: 'restrict',
            onDelete: 'restrict',
        })
        Practice.belongsTo(models.status, {
            onUpdate: 'restrict',
            onDelete: 'restrict',
        })
        Practice.belongsTo(models.practice_type, {
            onUpdate: 'restrict',
            onDelete: 'restrict',
        })
        Practice.belongsTo(models.resource, {
            onUpdate: 'restrict',
            onDelete: 'restrict',
        })
    }

    return Practice;
};