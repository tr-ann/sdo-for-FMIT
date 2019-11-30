import { Model } from 'sequelize/types'

export default (sequelize, DataTypes) => {
    class Faculty extends Model {}

    var Faculty = sequelize.define('faculty', {
        name: {
            allowNull: false,
            type: Sequelize.STRING(100),
        },
        short_name: {
            allowNull: false,
            type: Sequelize.STRING(50),
        },
    }, {
        sequelize,
        underscope: true,
        createdAt: false,
        updatedAt: false,
        deletedAt: 'deleted_date',
        paranoid: true,
        modelName: 'faculty',
        freezeTableName: 'faculties',

        name: {
            singular: 'faculty',
            plural: 'faculties',
        },
    });
    Faculty.associate = function(models) {
        Faculty.hasMany(models.gorup, {
            onUpdate: 'restrict',
            onDelete: 'restrict',
        })
        Faculty.hasOne(models.info_faculty, {
            onUpdate: 'restrict',
            onDelete: 'restrict',
        })
    };
    return Faculty;
};