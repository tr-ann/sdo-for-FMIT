import { Model } from 'sequelize'

export default (sequelize, DataTypes) => {

    class StudentSubgroup extends Model {}

    StudentSubgroup.init({}, {
        sequelize,
        underscope: true,
        createdAt: false,
        updatedAt: false,
        deletedAt: 'deleted_date',
        paranoid: true,
        modelName: 'student_subgroup',
        freezeTableName: 'students_subgroups',
        name: {
            simple: 'studentSubgroup',
            plural: 'studentSubgroups',
        }
    })
    StudentSubgroup.associate = function (models) {
        StudentSubgroup.belongsTo(models.student, {
            onDelete: 'restrict',
            onUpdate: 'restrict',
        })
        StudentSubgroup.belongsTo(models.subgroup, {
            onDelete: 'restrict',
            onUpdate: 'restrict',
        })
    }

    return StudentSubgroup;
};