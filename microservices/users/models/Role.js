import { Model } from 'sequelize/types'

export default (sequelize, DataTypes) => {
    class Role extends Model {}

    Role.init({
        name: {
            allowNull: false,
            type: DataTypes.STRING(100),
        },
    }, {
        sequelize,
        underscope: true,
        createdAt: false,
        updatedAt: false,
        deletedAt: 'deleted_date',
        paranoid: true,
        modelName: 'role',
        name: {
            simple: 'role',
            plural: 'roles',
        }
    });

    Role.associate = function (models) { };
    
    return Role;
}