import { Model } from 'sequelize'

export default (sequelize, DataTypes) => {
    class Department extends Model {}

    Department.init({
        name: {
            allowNull: false,
            type: DataTypes.STRING(100),
        },
        faculty_id: {
            allowNull: false,
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
        lecture_room_id: {
            allowNull: true,
            type: DataTypes.INTEGER,
        },
    }, {
        sequelize,
        createdAt: false,
        updatedAt: false,
        deletedAt: 'deleted_date',
        paranoid: true,
        modelName: 'department',
    })
    
    Department.associate = function(models) {
        Department.belongsTo(models.user, {
            onUpdate: 'restrict',
            onDelete: 'restrict',
            foreignKey: 'owner_id',
            as: "user"
        })
        Department.belongsTo(models.faculty, {
            onUpdate: 'restrict',
            onDelete: 'restrict',
            foreignKey: 'faculty_id',
            as: "faculty"
        })
        Department.belongsTo(models.lecture_room, {
            onUpdate: 'restrict',
            onDelete: 'restrict',
            foreignKey: 'lecture_room_id',
            as: "lecture_room"
        })

        Department.hasMany(models.teacher, {
            onUpdate: 'restrict',
            onDelete: 'restrict',
            foreignKey: 'department_id',
            as: "teachers"
        })
    }

    return Department;
};
    