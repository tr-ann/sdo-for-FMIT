import { Model } from 'sequelize'

export default (sequelize, DataTypes) => {

    class Building extends Model {}

    Building.init({
        name: {
            allowNull: false,
            type: DataTypes.STRING(200),
        },
    }, {
        sequelize,
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
            foreignKey: 'building_id',
            as: 'lecture_rooms',
        })
    }

    return Building
}