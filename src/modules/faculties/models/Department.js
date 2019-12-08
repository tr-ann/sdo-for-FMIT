import { Model } from 'sequelize'

export default (sequelize, DataTypes) => {
    class Department extends Model {}

    Department.init({
        name: {
            allowNull: false,
            type: DataTypes.STRING(100),
        },
        faculty_id: {
            allowNull: true,
            type: DataTypes.INTEGER,
        },
        owner_id: {
            allowNull: true,
            type: DataTypes.INTEGER,
        },
        phone: {
            allowNull: true,
            type: DataTypes.STRING(30),
        },
        room_id: {
            allowNull: true,
            type: DataTypes.INTEGER,
        },
    }, {
        sequelize,
        underscope: true,
        createdAt: false,
        updatedAt: false,
        deletedAt: 'deleted_date',
        paranoid: true,
        modelName: 'department',

        name: {
            simple: 'department',
            plural: 'departments',
        }
    })
    
    Department.associate = function(models) {
        Department.belongsTo(models.user, {
            onUpdate: 'restrict',
            onDelete: 'restrict',
        })
        Department.belongsTo(models.faculty, {
            onUpdate: 'restrict',
            onDelete: 'restrict',
        })
        Department.belongsTo(models.lecture_room, {
            onUpdate: 'restrict',
            onDelete: 'restrict',
        })

        Department.hasMany(models.teacher, {
            onUpdate: 'restrict',
            onDelete: 'restrict',
        })
    }

    return Department;
};
    