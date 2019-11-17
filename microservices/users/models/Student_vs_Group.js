module.exports = (sequelize, DataTypes) => {
    var Student_vs_Group = sequelize.define('student_vs_group', {
        id: {
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
            type: sequelize.INTEGER,
        },
    }, {});
    Student_vs_Group.associate = function (models) { };
    return Student_vs_Group;
};