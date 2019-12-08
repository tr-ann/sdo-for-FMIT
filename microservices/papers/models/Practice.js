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
        description: {
            type: DataTypes.TEXT,
        },
        student_id: {
            type: DataTypes.INTEGER,
        },
        organization_id: {
            type: DataTypes.INTEGER,
        },
        status_id: {
            type: DataTypes.INTEGER,
        },
        practice_type_id: {
            type: DataTypes.INTEGER,
        },
        resource_id: {
            type: DataTypes.INTEGER,
        }
    }, {
        name: {
            singular: 'practice',
            plural: 'practices',
        },
        sequelize,
        underscored: true,
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
        })
        Practice.belongsTo(models.organization, {
            onUpdate: 'restrict',
            onDelete: 'restrict',
            foreignKey: 'organization_id',
        })
        Practice.belongsTo(models.status, {
            onUpdate: 'restrict',
            onDelete: 'restrict',
            foreignKey: 'status_id',
        })
        Practice.belongsTo(models.practice_type, {
            onUpdate: 'restrict',
            onDelete: 'restrict',
            foreignKey: 'practice_type_id',
        })
        Practice.belongsTo(models.resource, {
            onUpdate: 'restrict',
            onDelete: 'restrict',
            foreignKey: 'resource_id',
        })
    }

    return Practice;
};