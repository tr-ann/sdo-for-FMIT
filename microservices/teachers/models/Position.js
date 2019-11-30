import { Model } from 'sequelize/types'

export default (sequelize, DataTypes) => {
    
    class Position extends Model {}
    
    Position.init({
        name: {
            allowNull: false,
            type: DataTypes.STRING(100),
        },
    }, {
        sequelize,
        underscope: true,
        createdAt: false,
        updatedAt: false,
        deletedAt: 'deleted_date',
        paranoid: true,
        modelName: 'position',
        name: {
            simple: 'position',
            plural: 'positions',
        }
    })
    
    Position.associate = function (models) {
        Position.hasMany(models.Teacher, {
            onDelete: 'restrict',
            onUpdate: 'restrict',
        })
    }

    return Position
}