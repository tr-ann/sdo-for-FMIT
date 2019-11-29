export default (sequelize, DataTypes) => {
    var StudyMode = sequelize.define('study_mode', {
        name: {
            allowNull: false,
            type: Sequelize.STRING(45),
        },
    }, {
        underscored: true,
        name: {
            singular: 'StudyMode',
            plural: 'StudyModes',
        },
    });
    StudyMode.associate = function(models) {
        StudyMode.hasMany(models.group, {
            onUpdate: 'cascade',
            onDelete: 'restrict',
        })
    };
    return StudyMode;
};