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
        underscope: true,
        createdAt: false,
        updatedAt: false,
        deletedAt: 'deleted_date',
        paranoid: true,
        modelName: 'teacher',
        name: {
            simple: 'teacher',
            plural: 'teachers',
        }
    })

    Teacher.associate = function (models) {
        Teacher.belongsToMany(models.group, {
            through: models.curator,
            onDelete: 'restrict',
            onUpdate: 'restrict',
            foreignKey: 'teacher_id',
            otherKey: 'group_id'
        })
        Teacher.belongsTo(models.user, {
            onDelete: 'restrict',
            onUpdate: 'restrict',
            foreignKey: 'user_id'
        })
        Teacher.belongsTo(models.department, {
            onDelete: 'restrict',
            onUpdate: 'restrict',
            foreignKey: 'department_id'
        })
        Teacher.belongsTo(models.position, {
            onDelete: 'restrict',
            onUpdate: 'restrict',
            foreignKey: 'position_id'
        })
        Teacher.belongsTo(models.academic_rank, {
            onDelete: 'restrict',
            onUpdate: 'restrict',
            foreignKey: 'academic_rank_id'
        })
        Teacher.belongsTo(models.academic_degree, {
            onDelete: 'restrict',
            onUpdate: 'restrict',
            foreignKey: 'academic_degree_id'
        })

        Teacher.hasMany(models.graduation_paper, {
            onDelete: 'restrict',
            onUpdate: 'restrict',
            foreignKey: 'teacher_id'
        })
        Teacher.hasMany(models.term_paper, {
            onDelete: 'restrict',
            onUpdate: 'restrict',
            foreignKey: 'teacher_id'
        })
        Teacher.hasMany(models.request, {
            onDelete: 'restrict',
            onUpdate: 'restrict',
            foreignKey: 'teacher_id'
        })
        Teacher.hasMany(models.lesson, {
            onDelete: 'restrict',
            onUpdate: 'restrict',
            foreignKey: 'teacher_id'
        })
    }

    return Teacher
}