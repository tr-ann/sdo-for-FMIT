import { Model } from 'sequelize'

export default (sequelize, DataTypes) => {
    
    class ControlPoint extends Model {}

    ControlPoint.init({
        url: {
            allowNull: false,
            type: DataTypes.STRING,
            validate: {
                isUrl: true,
            },
        },
        method: {
            allowNull: false,
            type: DataTypes.STRING,
        },
    }, {
        sequelize,
        createdAt: false,
        updatedAt: false,
        deletedAt: 'deleted_date',
        paranoid: true,
        modelName: 'control_point',
    })

    ControlPoint.associate = function (models) {
        ControlPoint.belongsToMany(models.role, {
            through: models.access_rule,
            onDelete: 'restrict',
            onUpdate: 'restrict',
            foreignKey: 'control_point_id',
            as: 'roles',
        })
    };
    
    return ControlPoint;
}