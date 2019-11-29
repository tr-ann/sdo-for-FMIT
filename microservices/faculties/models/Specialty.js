export default (sequelize, DataTypes) => {
    var Specialty = sequelize.define('specialty', {
        code: {
            allowNull: false,
            type: Sequelize.STRING(20),
        },
        name: {
            allowNull: false,
            type: Sequelize.STRING(100),
        },
        short_name: {
            allowNull: false,
            type: Sequelize.STRING(60),
        },
    }, {
        underscored: true,
        name: {
            singular: 'Specialty',
            plural: 'Specialties',
        },
    });
    Specialty.associate = function(models) {
        Specialty.hasMany(models.group, {
            onUpdate: 'cascade',
            onDelete: 'restrict',
        })
    };
    return Specialty;
};