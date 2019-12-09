import { Model } from 'sequelize'

export default (sequelize, DataTypes) => {
    class Teacher extends Model {}
    
    Teacher.init({
        user_id: {
            allowNull: false,
            type: DataTypes.INTEGER,
        },
        full_name: {
            allowNull: false,
            type: DataTypes.STRING(255),
        },
        short_name: {
            allowNull: false,
            type: DataTypes.STRING(255),
        },
        department_id: {
            allowNull: false,
            type: DataTypes.INTEGER,
        },
        academic_degree_id: {
            allowNull: false,
            type: DataTypes.INTEGER,
        },
        academic_rank_id: {
            allowNull: false,
            type: DataTypes.INTEGER,
        },
        position_id: {
            allowNull: false,
            type: DataTypes.INTEGER,
        }
    }, {
        sequelize,
        createdAt: false,
        updatedAt: false,
        deletedAt: 'deleted_date',
        paranoid: true,
        modelName: 'teacher',
    })

    Teacher.associate = function (models) {
        Teacher.belongsToMany(models.group, {
            through: models.curator,
            onDelete: 'restrict',
            onUpdate: 'restrict',
            foreignKey: 'teacher_id',
            otherKey: 'group_id',
            as: 'group'
        })
        Teacher.belongsTo(models.user, {
            onDelete: 'restrict',
            onUpdate: 'restrict',
            foreignKey: 'user_id',
            as: 'user',
        })
        Teacher.belongsTo(models.department, {
            onDelete: 'restrict',
            onUpdate: 'restrict',
            foreignKey: 'department_id',
            as: 'department',
        })
        Teacher.belongsTo(models.position, {
            onDelete: 'restrict',
            onUpdate: 'restrict',
            foreignKey: 'position_id',
            as: 'position',
        })
        Teacher.belongsTo(models.academic_rank, {
            onDelete: 'restrict',
            onUpdate: 'restrict',
            foreignKey: 'academic_rank_id',
            as: 'academic_rank',
        })
        Teacher.belongsTo(models.academic_degree, {
            onDelete: 'restrict',
            onUpdate: 'restrict',
            foreignKey: 'academic_degree_id',
            as: 'academic_degree',
        })

        Teacher.hasMany(models.graduation_paper, {
            onDelete: 'restrict',
            onUpdate: 'restrict',
            foreignKey: 'teacher_id',
            as: 'graduation_papers',
        })
        Teacher.hasMany(models.term_paper, {
            onDelete: 'restrict',
            onUpdate: 'restrict',
            foreignKey: 'teacher_id',
            as: 'term_papers',
        })
        Teacher.hasMany(models.request, {
            onDelete: 'restrict',
            onUpdate: 'restrict',
            foreignKey: 'teacher_id',
            as: 'requests',
        })
        Teacher.hasMany(models.lesson, {
            onDelete: 'restrict',
            onUpdate: 'restrict',
            foreignKey: 'teacher_id',
            as: 'lessons',
        })
    }

    return Teacher
}