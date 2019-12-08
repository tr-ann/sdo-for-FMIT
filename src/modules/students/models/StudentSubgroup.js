import { Model } from 'sequelize'

export default (sequelize, DataTypes) => {

    class StudentSubgroup extends Model {}

    StudentSubgroup.init({
        student_id: {
            allowNull: false,
            type: DataTypes.INTEGER,
        },
        subgroup_id: {
            allowNull: false,
            type: DataTypes.INTEGER
        }
    }, {
        sequelize,
        createdAt: false,
        updatedAt: false,
        deletedAt: 'deleted_date',
        paranoid: true,
        modelName: 'student_subgroup',
        tableName: 'students_subgroups',
    })
    StudentSubgroup.associate = function (models) {
        StudentSubgroup.belongsTo(models.student, {
            onDelete: 'restrict',
            onUpdate: 'restrict',
            as: 'students',
        })
        StudentSubgroup.belongsTo(models.subgroup, {
            onDelete: 'restrict',
            onUpdate: 'restrict',
            as: 'subgroups',
        })
    }

    return StudentSubgroup;
};