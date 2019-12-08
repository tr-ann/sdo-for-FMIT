import { Model } from 'sequelize'

export default (sequelize, DataTypes) => {

    class Practice extends Model {}

    Practice.init({
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
        },
        update_date: {
            type: DataTypes.DATEONLY,
            allowNull: false,
        },
        description: DataTypes.TEXT,
        student_id: DataTypes.INTEGER,
        organization_id: DataTypes.INTEGER,
        status_id: DataTypes.INTEGER,
        practice_type_id: DataTypes.INTEGER,
        resource_id: DataTypes.INTEGER,
    }, {
        sequelize,
        createdAt: false,
        updatedAt: false,
        deletedAt: "deleted_date",
        paranoid: true,
        modelName: 'practice',
    })
    
    Practice.associate = function(models) {
        Practice.belongsTo(models.student, {
            onUpdate: 'restrict',
            onDelete: 'restrict',
            foreignKey: 'student_id',
            as: 'student',
        })
        Practice.belongsTo(models.organization, {
            onUpdate: 'restrict',
            onDelete: 'restrict',
            foreignKey: 'organization_id',
            as: 'organization',
        })
        Practice.belongsTo(models.status, {
            onUpdate: 'restrict',
            onDelete: 'restrict',
            foreignKey: 'status_id',
            as: 'status',
        })
        Practice.belongsTo(models.practice_type, {
            onUpdate: 'restrict',
            onDelete: 'restrict',
            foreignKey: 'practice_type_id',
            as: 'practice_type',
        })
        Practice.belongsTo(models.resource, {
            onUpdate: 'restrict',
            onDelete: 'restrict',
            foreignKey: 'resource_id',
            as: 'resource',
        })
    }

    return Practice
}