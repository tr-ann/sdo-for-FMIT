import { Model } from 'sequelize'

export default (sequelize, DataTypes) => {

    class Request extends Model {}

    Request.init({
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
            defaultValue: new Date(),
        },
        update_date: {
            type: DataTypes.DATEONLY,
        },
        description: {
            type: DataTypes.TEXT,
        },
        student_id: {
            type: DataTypes.INTEGER,
        },
        teacher_id: {
            type: DataTypes.INTEGER,
        },
        status_id: {
            type: DataTypes.INTEGER,
        }
    }, {
        name: {
            singular: 'request',
            plural: 'requests',
        },
        sequelize,
        underscored: true,
        createdAt: false,
        updatedAt: false,
        deletedAt: "deleted_date",
        paranoid: true,
        modelName: 'request',
    })
    
    Request.associate = function(models) {
        Request.belongsTo(models.student, {
            onUpdate: 'restrict',
            onDelete: 'restrict',
            foreignKey: 'student_id',
        })
        Request.belongsTo(models.teacher, {
            onUpdate: 'restrict',
            onDelete: 'restrict',
            foreignKey: 'teacher_id',
        })
        Request.belongsTo(models.status, {
            onUpdate: 'restrict',
            onDelete: 'restrict',
            foreignKey: 'status_id',
        })
    }

    return Request;
};