module.exports = (sequelize, DataTypes) => {
    var StudentSubgroup = sequelize.define('student_subgroup', {}, {
        underscope: true,
        timestamp: true, // надо??
        name: {
            simple: 'studentSubgroup',
            plural: 'studentSubgroups',
        }
    });
    StudentGroup.associate = function (models) {
        StudentGroup.belongsTo(models.Student, {
            onDelete: 'restrict',
            onUpdate: 'cascade',
        });
        StudentGroup.belongsTo(models.Subgroup, {
            onDelete: 'restrict',
            onUpdate: 'cascade',
        });
    };
    return StudentSubgroup;
};