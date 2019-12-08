import { Model } from 'sequelize'

export default (sequelize, DataTypes) => {
    class Faculty extends Model {}

    Faculty.init({
        name: {
            allowNull: false,
            type: DataTypes.STRING(100),
        },
        short_name: {
            allowNull: false,
            type: DataTypes.STRING(50),
        },
    }, {
        sequelize,
        createdAt: false,
        updatedAt: false,
        deletedAt: 'deleted_date',
        paranoid: true,
        modelName: 'faculty',
        tableName: 'faculties'
    });

    Faculty.associate = function(models) {
        Faculty.hasMany(models.group, {
            onUpdate: 'restrict',
            onDelete: 'restrict',
            foreignKey: 'faculty_id'
        })
        Faculty.hasOne(models.info_faculty, {
            onUpdate: 'restrict',
            onDelete: 'restrict',
            foreignKey: 'faculty_id',
            as: 'info_faculty'
        })
    };
    return Faculty;
};