import { Model } from 'sequelize'

export default (sequelize, DataTypes) => {
    
    class AccessRule extends Model {}

    AccessRule.init({}, {
        sequelize,
        createdAt: false,
        updatedAt: false,
        deletedAt: 'deleted_date',
        paranoid: true,
        modelName: 'access_rule',
    })

    return AccessRule;
};