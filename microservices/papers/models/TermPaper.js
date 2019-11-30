import { Model } from "sequelize/types";

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
        })
        TermPaper.belongsTo(models.teacher, {
            onUpdate: 'restrict',
            onDelete: 'restrict',
        })
        TermPaper.belongsTo(models.status, {
            onUpdate: 'restrict',
            onDelete: 'restrict',
        })
        TermPaper.belongsTo(models.resource, {
            onUpdate: 'restrict',
            onDelete: 'restrict',
        })
    }

    return TermPaper;
};