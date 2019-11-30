import { Model } from 'sequelize'

export default (sequelize, DataTypes) => {
    class InfoFaculty extends Model {}

    var InfoFaculty = sequelize.define('info_faculty', {
        description: {
            allowNull: true,
            type: DataTypes.TEXT,
        },
        phone_number: {
            allowNull: false,
            type: DataTypes.STRING(20),
        },
    }, {
        sequelize,
        underscope: true,
        createdAt: false,
        updatedAt: false,
        deletedAt: 'deleted_date',
        paranoid: true,
        modelName: 'info_faculty',
        freezeTableName: 'info_faculties',

        name: {
            singular: 'infoFaculty',
            plural: 'infoFaculties',
        },
    });
    InfoFaculty.associate = function(models) {
        InfoFaculty.belongsTo(models.faculty, {
            onUpdate: 'restrict',
            onDelete: 'restrict',
        })
    };
    return InfoFaculty;
};