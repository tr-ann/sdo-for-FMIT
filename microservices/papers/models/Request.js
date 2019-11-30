import { Model } from "sequelize/types";

export default (sequelize, DataTypes) => {

    class Request extends Model {}

    Request.init({
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
            defaultValue: new Date(),
        },
        update_date: {
            type: DataTypes.DATEONLY,
        },
        description: {
            type: DataTypes.TEXT
        },
    }, {
        name: {
            singular: 'request',
            plural: 'requests',
        },
        sequelize,
        underscored: true,
        createdAt: false,
        updatedAt: false,
        deletedAt: "deleted_date",
        paranoid: true,
        modelName: 'request',
    })
    
    Request.associate = function(models) {
        Request.belongsTo(models.student, {
            onUpdate: 'restrict',
            onDelete: 'restrict',
        })
        Request.belongsTo(models.teacher, {
            onUpdate: 'restrict',
            onDelete: 'restrict',
        })
        Request.belongsTo(models.status, {
            onUpdate: 'restrict',
            onDelete: 'restrict',
        })
    }

    return Request;
};