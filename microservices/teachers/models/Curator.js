import { Model } from 'sequelize/types'

export default (sequelize, DataTypes) => {

    class Curator extends Model {}
    
    Curator.init({}, {
        sequelize,
        underscope: true,
        createdAt: false,
        updatedAt: false,
        deletedAt: 'deleted_date',
        paranoid: true,
        modelName: 'curator',
        name: {
            simple: 'carator',
            plural: 'curators',
        }
    })

    Curator.associate = function (models) {
        Curator.belongsTo(models.Teacher, {
            onDelete: 'restrict',
            onUpdate: 'restrict',
        })
        Curator.belongsTo(models.Group, {
            onDelete: 'restrict',
            onUpdate: 'restrict',
        })
    }
    
    return Curator
}