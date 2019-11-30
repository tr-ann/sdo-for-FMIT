import { Model } from 'sequelize'

export default (sequelize, DataTypes) => {

    class Building extends Model {}

    Building.init({
        name: {
            allowNull: false,
            type: DataTypes.STRING(200),
        },
    }, {
        name: {
            singular: 'building',
            plural: 'buildings',
        },
        sequelize,
        underscored: true,
        createdAt: false,
        updatedAt: false,
        deletedAt: "deleted_date",
        paranoid: true,
        modelName: 'building',
    })
    
    Building.associate = function(models) {
        Building.hasMany(models.lecture_room, {
            onUpdate: 'restrict',
            onDelete: 'restrict',
        })
    }

    return Building;
};