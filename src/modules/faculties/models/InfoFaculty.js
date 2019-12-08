import { Model } from 'sequelize'

export default (sequelize, DataTypes) => {
    class InfoFaculty extends Model {}

    InfoFaculty.init({
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
        createdAt: false,
        updatedAt: false,
        deletedAt: 'deleted_date',
        paranoid: true,
        modelName: 'info_faculty',
        tableName: 'info_faculties'
    });
    InfoFaculty.associate = function(models) {
        InfoFaculty.belongsTo(models.faculty, {
            onUpdate: 'restrict',
            onDelete: 'restrict',
            foreignKey: 'faculty_id',
            as: 'faculty'
        })
    };
    return InfoFaculty;
};