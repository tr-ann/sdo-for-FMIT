import { Model } from 'sequelize'

export default (sequelize, DataTypes) => {

    class Status extends Model {}

    Status.init({
        name: {
            allowNull: false,
            unique: true,
            type: DataTypes.STRING(30),
        },
    }, {
        sequelize,
        createdAt: false,
        updatedAt: false,
        deletedAt: "deleted_date",
        paranoid: true,
        modelName: 'status',
        tableName: 'statuses',
    })

    Status.associate = function(models) {
        Status.hasMany(models.request, {
            onUpdate: 'restrict',
            onDelete: 'restrict',
            foreignKey: 'status_id',
            as: 'requests',
        })
        Status.hasMany(models.term_paper, {
            onUpdate: 'restrict',
            onDelete: 'restrict',
            foreignKey: 'status_id',
            as: 'term_papers',
        })
        Status.hasMany(models.graduation_paper, {
            onUpdate: 'restrict',
            onDelete: 'restrict',
            foreignKey: 'status_id',
            as: 'graduation_papers',
        })
        Status.hasMany(models.practice, {
            onUpdate: 'restrict',
            onDelete: 'restrict',
            foreignKey: 'status_id',
            as: 'practices',
        })
    }

    return Status
}