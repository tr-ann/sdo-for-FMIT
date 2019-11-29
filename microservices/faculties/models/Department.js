export default (sequelize, DataTypes) => {

    const Department = sequelize.define('department', {
        name: {
            allowNull: false,
            type: Sequelize.STRING(100),
        },
        owner_id: {
            allowNull: true,
            type: Sequelize.INTEGER,
        },
        phone: {
            allowNull: true,
            type: Sequelize.STRING(30),
        },
        room_id: {
            allowNull: true,
            type: Sequelize.INTEGER,
        },
    }, {
        underscored: true,
        name: {
            singular: 'Department',
            plural: 'Departments',
        },
    })
    
    Department.associate = function(models) {
        Department.belongsTo(models.user, {
            onUpdate: 'cascade',
            onDelete: 'restrict',
        })
        Department.belongsTo(models.faculty, {
            onUpdate: 'cascade',
            onDelete: 'restrict',
        })
        Department.belongsTo(models.lecture_room, {
            onUpdate: 'cascade',
            onDelete: 'restrict',
        })

        Department.hasMany(models.teacher, {
            onUpdate: 'cascade',
            onDelete: 'restrict',
        })
    }

    return Department;
};
    