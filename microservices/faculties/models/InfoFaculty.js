export default (sequelize, DataTypes) => {
    var InfoFaculty = sequelize.define('info_faculty', {
        description: {
            allowNull: true,
            type: Sequelize.TEXT,
        },
        phone_number: {
            allowNull: false,
            type: Sequelize.STRING(20),
        },
    }, {
        underscored: true,
        name: {
            singular: 'InfoFaculty',
            plural: 'InfoFaculties',
        },
    });
    InfoFaculty.associate = function(models) {
        InfoFaculty.belongsTo(models.faculty, {
            onUpdate: 'cascade',
            onDelete: 'restrict',
        })
    };
    return InfoFaculty;
};