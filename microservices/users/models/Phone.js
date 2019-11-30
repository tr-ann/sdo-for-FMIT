import { Model } from 'sequelize/types'

export default (sequelize, DataTypes) => {
    class Phone extends Model {}

    Phone.init({
        phone: {
            allowNull: false,
            type: DataTypes.STRING(30),
        },
    }, {
        sequelize,
        underscope: true,
        createdAt: false,
        updatedAt: false,
        deletedAt: 'deleted_date',
        paranoid: true,
        modelName: 'phone',

        name: {
            simple: 'phone',
            plural: 'phones',
        }
    })
    
    Phone.associate = function (models) {
        Phone.belongsTo(models.User, {
            onDelete: 'restrict',
            onUpdate: 'restrict',
        })
    }
    return Phone;
}