import { Model } from 'sequelize'

export default (sequelize, DataTypes) => {
    class Specialty extends Model {}

    Specialty.init({
        code: {
            allowNull: false,
            type: DataTypes.STRING(20),
        },
        name: {
            allowNull: false,
            type: DataTypes.STRING(100),
        },
        short_name: {
            allowNull: false,
            type: DataTypes.STRING(60),
        },
    }, {
        sequelize,
        createdAt: false,
        updatedAt: false,
        deletedAt: 'deleted_date',
        paranoid: true,
        modelName: 'specialty',
        tableName: 'specialties',

    });
    Specialty.associate = function(models) {
        Specialty.hasMany(models.group, {
            onUpdate: 'restrict',
            onDelete: 'restrict',
            foreignKey: 'specialty_id'
        })
    };
    return Specialty;
};