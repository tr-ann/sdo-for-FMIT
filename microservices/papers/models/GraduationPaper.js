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
        },
        resource_id: {
            type: DataTypes.INTEGER,
        }
    }, {
        name: {
            singular: 'graduationPaper',
            plural: 'graduationPapers',
        },
        sequelize,
        underscored: true,
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
        })
        GraduationPaper.belongsTo(models.teacher, {
            onUpdate: 'restrict',
            onDelete: 'restrict',
            foreignKey: 'teacher_id',
        })
        GraduationPaper.belongsTo(models.status, {
            onUpdate: 'restrict',
            onDelete: 'restrict',
            foreignKey: 'status_id',
        })
        GraduationPaper.belongsTo(models.resource, {
            onUpdate: 'restrict',
            onDelete: 'restrict',
            foreignKey: 'resource_id',
        })
    }

    return GraduationPaper;
};