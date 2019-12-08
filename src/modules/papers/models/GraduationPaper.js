import { Model } from 'sequelize'

export default (sequelize, DataTypes) => {

    class GraduationPaper extends Model {}

    GraduationPaper.init({
        topic: {
            allowNull: false,
            type: DataTypes.STRING(50),
        },
        name: {
            allowNull: false,
            type: DataTypes.STRING(90),
        },
        description: DataTypes.TEXT,
        student_id: DataTypes.INTEGER,
        teacher_id: DataTypes.INTEGER,
        status_id: DataTypes.INTEGER,
        resource_id: DataTypes.INTEGER,
    }, {
        sequelize,
        createdAt: false,
        updatedAt: false,
        deletedAt: "deleted_date",
        paranoid: true,
        modelName: 'graduation_paper',
    })
    
    GraduationPaper.associate = function(models) {
        GraduationPaper.belongsTo(models.student, {
            onUpdate: 'restrict',
            onDelete: 'restrict',
            foreignKey: 'student_id',
            as: 'student',
        })
        GraduationPaper.belongsTo(models.teacher, {
            onUpdate: 'restrict',
            onDelete: 'restrict',
            foreignKey: 'teacher_id',
            as: 'teacher',
        })
        GraduationPaper.belongsTo(models.status, {
            onUpdate: 'restrict',
            onDelete: 'restrict',
            foreignKey: 'status_id',
            as: 'status',
        })
        GraduationPaper.belongsTo(models.resource, {
            onUpdate: 'restrict',
            onDelete: 'restrict',
            foreignKey: 'resource_id',
            as: 'resource',
        })
    }

    return GraduationPaper
}