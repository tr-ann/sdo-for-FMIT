import { Model } from 'sequelize'

export default (sequelize, DataTypes) => {

    class Discipline extends Model {}

    Discipline.init({
        name: {
            allowNull: false,
            type: DataTypes.STRING(100),
        },
        short_name: {
            allowNull: false,
            type: DataTypes.STRING(20),
        },
    }, {
        name: {
            singular: 'discipline',
            plural: 'disciplines',
        },
        sequelize,
        underscored: true,
        createdAt: false,
        updatedAt: false,
        deletedAt: "deleted_date",
        paranoid: true,
        modelName: 'discipline',
    })

    Discipline.associate = function(models) {
        Discipline.hasMany(models.lesson, {
            onUpdate: 'restrict',
            onDelete: 'restrict',
            foreignKey: 'discipline_id',
        })
    }

    return Discipline;
};