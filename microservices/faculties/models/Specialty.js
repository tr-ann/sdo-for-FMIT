import { Model } from 'sequelize/types'

export default (sequelize, DataTypes) => {
    class Specialty extends Model {}

    var Specialty = sequelize.define('specialty', {
        code: {
            allowNull: false,
            type: Sequelize.STRING(20),
        },
        name: {
            allowNull: false,
            type: Sequelize.STRING(100),
        },
        short_name: {
            allowNull: false,
            type: Sequelize.STRING(60),
        },
    }, {
        sequelize,
        underscope: true,
        createdAt: false,
        updatedAt: false,
        deletedAt: 'deleted_date',
        paranoid: true,
        modelName: 'specialty',
        freezeTableName: 'specialties',

        name: {
            singular: 'specialty',
            plural: 'specialties',
        },
    });
    Specialty.associate = function(models) {
        Specialty.hasMany(models.group, {
            onUpdate: 'restrict',
            onDelete: 'restrict',
        })
    };
    return Specialty;
};