import { Model } from "sequelize/types";

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
            type: DataTypes.TEXT
        },
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
        })
        GraduationPaper.belongsTo(models.teacher, {
            onUpdate: 'restrict',
            onDelete: 'restrict',
        })
        GraduationPaper.belongsTo(models.status, {
            onUpdate: 'restrict',
            onDelete: 'restrict',
        })
        GraduationPaper.belongsTo(models.resource, {
            onUpdate: 'restrict',
            onDelete: 'restrict',
        })
    }

    return GraduationPaper;
};