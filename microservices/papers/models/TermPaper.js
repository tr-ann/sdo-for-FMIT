import { Model } from 'sequelize'

export default (sequelize, DataTypes) => {

    class TermPaper extends Model {}

    TermPaper.init({
        topic: {
            allowNull: false,
            type: DataTypes.STRING(50),
        },
        name: {
            allowNull: false,
            type: DataTypes.STRING(90),
        },
        description: {
            type: DataTypes.TEXT
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
            singular: 'termPaper',
            plural: 'termPapers',
        },
        sequelize,
        underscored: true,
        createdAt: false,
        updatedAt: false,
        deletedAt: "deleted_date",
        paranoid: true,
        modelName: 'term_paper',
    })
    
    TermPaper.associate = function(models) {
        TermPaper.belongsTo(models.student, {
            onUpdate: 'restrict',
            onDelete: 'restrict',
            foreignKey: 'student_id',
        })
        TermPaper.belongsTo(models.teacher, {
            onUpdate: 'restrict',
            onDelete: 'restrict',
            foreignKey: 'teacher_id',
        })
        TermPaper.belongsTo(models.status, {
            onUpdate: 'restrict',
            onDelete: 'restrict',
            foreignKey: 'status_id',
        })
        TermPaper.belongsTo(models.resource, {
            onUpdate: 'restrict',
            onDelete: 'restrict',
            foreignKey: 'resource_id',
        })
    }

    return TermPaper;
};