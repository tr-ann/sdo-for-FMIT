export default (sequelize, DataTypes) => {
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
        underscored: true,
        name: {
            singular: 'Faculty',
            plural: 'Faculties',
        },
    });
    Faculty.associate = function(models) {
        Faculty.hasMany(models.gorup, {
            onUpdate: 'cascade',
            onDelete: 'restrict',
        })
        Faculty.hasOne(models.info_faculty, {
            onUpdate: 'cascade',
            onDelete: 'restrict',
        })
    };
    return Faculty;
};