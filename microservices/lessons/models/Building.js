module.exports = (sequelize, DataTypes) => {
    var Building = sequelize.define('building', {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: sequelize.INTEGER,
        },
        name: {
            allowNull: false,
            type: sequelize.STRING(200),
        },
    }, {});
    Building.associate = function(models) {
        Building.hasMany(models.LectureRoom, {foreignKey: 'building_id', as: 'lectureRooms'})
    };
    return Building;
};