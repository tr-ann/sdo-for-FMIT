import { Model } from 'sequelize'

export default (sequelize, DataTypes) => {

    class Curator extends Model {}
    
    Curator.init({
        teacher_id: {
            allowNull: false,
            type: DataTypes.INTEGER,
        },
        group_id: {
            allowNull: false,
            type: DataTypes.INTEGER,
        }
    }, {
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
        Curator.belongsTo(models.teacher, {
            onDelete: 'restrict',
            onUpdate: 'restrict',
            foreignKey: 'teacher_id'
        })
        Curator.belongsTo(models.group, {
            onDelete: 'restrict',
            onUpdate: 'restrict',
            foreignKey: 'group_id'
        })
    }
    
    return Curator
}